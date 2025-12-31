const API_KEY = '1c9dec315b9ad5eddb959cb1758acc62'; // cadastre-se em https://openweathermap.org/api
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city: string) => {
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`);
    if (!response.ok) {
      throw new Error('Cidade não encontrada');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
