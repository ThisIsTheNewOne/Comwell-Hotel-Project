  export const sjællandCities = [
    { city: 'Copenhagen' },
    { city: 'Roskilde'},
    { city: 'Køge'},
    { city: 'Næstved'},
    { city: 'Slagelse' },
    { city: 'Hillerød' },
    { city: 'Holbæk' },
    { city: 'Ringsted' },
    { city: 'Greve'},
    { city: 'Solrød Strand' },
    { city: 'Nordhavn' },
  ];

   export const fynCities = [
    { city: 'Odense'},
    { city: 'Svendborg' },
    { city: 'Nyborg' },
    { city: 'Assens' },
    { city: 'Middelfart'},
    { city: 'Faaborg' },
    { city: 'Kerteminde'},
    { city: 'Bogense'},
    { city: 'Otterup' },
    { city: 'Ringe'},
  ];
  
  export const jyllandCities = [
    { city: 'Aarhus'},
    { city: 'Aalborg' },
    { city: 'Esbjerg' },
    { city: 'Horsens' },
    { city: 'Randers' },
    { city: 'Vejle'},
    { city: 'Herning' },
    { city: 'Silkeborg' },
    { city: 'Holstebro'},
    { city: 'Skive'},
    { city: 'Kolding'},
    { city: 'Børkop'},
  ];


  const setRegion = (city:string) => {
    if (sjællandCities.some((c) => c.city === city)) {
      return 'Sjælland';
    } else if (fynCities.some((c) => c.city === city)) {
      return 'Fyn';
    } else if (jyllandCities.some((c) => c.city === city)) {
      return 'Jylland';
    } else {
      return 'Unknown';
    }
  };
  
  export default setRegion;