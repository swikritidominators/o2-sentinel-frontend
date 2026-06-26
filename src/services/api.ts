const API = "http://localhost:5000";

export const getSensorData = async () => {
  const res = await fetch(`${API}/api/sensors`);
  return await res.json();
};

export const getAlerts = async () => {
  const res = await fetch(`${API}/api/alerts`);
  return await res.json();
};

export const getDevices = async () => {
  const res = await fetch(`${API}/api/devices`);
  return await res.json();
};