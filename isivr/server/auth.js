let cached = null;

async function accessToken() {
  if (cached && cached.expiresAt > Date.now() + 30_000) return cached.token;
  const body = new URLSearchParams({
    grant_type: 'password',
    client_id: required('KEYCLOAK_CLIENT_ID'),
    username: required('KEYCLOAK_USERNAME'),
    password: required('KEYCLOAK_PASSWORD'),
  });
  const response = await fetch(required('KEYCLOAK_TOKEN_URL'), {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body,
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload.access_token) {
    throw new Error(`Keycloak отклонил вход: ${response.status}`);
  }
  cached = {
    token: payload.access_token,
    expiresAt: Date.now() + (payload.expires_in || 60) * 1000,
  };
  return cached.token;
}

function required(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Не задано ${name}`);
  return value;
}

module.exports = { accessToken };
