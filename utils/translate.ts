export const translateLabel = (key: string) => {
  const map: Record<string, string> = {
    model_name: 'Modelo',
    model_make_id: 'Fabricante',
    model_year: 'Ano',
    model_trim: 'Versão',
    model_engine_fuel: 'Combustível',
    model_engine_cc: 'Cilindrada (cc)',
    model_engine_power_ps: 'Potência (PS)',
    model_transmission_type: 'Transmissão',
    model_drive: 'Tração',
    model_body: 'Carroceria',
    model_doors: 'Portas',
    model_seats: 'Assentos',
    model_weight_kg: 'Peso (kg)',
    model_lkm_hwy: 'Consumo Estrada (l/100km)',
    model_lkm_mixed: 'Consumo Misto (l/100km)',
    model_lkm_city: 'Consumo Cidade (l/100km)',
  };
  return map[key] || key;
};

export const translateValue = (value: any) => {
  if (typeof value !== 'string') return value;
  const map: Record<string, string> = {
    FWD: 'Tração Dianteira',
    RWD: 'Tração Traseira',
    AWD: 'Tração Integral',
    Diesel: 'Diesel',
    Petrol: 'Gasolina',
    NULL: 'Não disponível'
  };
  return map[value] || value;
};
