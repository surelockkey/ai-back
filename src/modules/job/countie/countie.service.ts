import { Injectable } from '@nestjs/common';
import { CrudService } from '@tech-slk/nest-crud';
import { Countie } from './entity/countie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CountieService extends CrudService<Countie> {
  constructor(
    @InjectRepository(Countie)
    private readonly countieRepository: Repository<Countie>,
  ) {
    super(countieRepository);
  }

  public async saveAllCountie() {
    return this.countieRepository.save([
      {
        state: 'Arizona',
        city: 'Eagar',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Chinle',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Fort Defiance',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'St. Johns',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Window Rock',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Springerville',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Lukachukai',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Tsaile',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'McNary',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Ganado',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Houck',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Teec Nos Pos',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Sanders',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'St. Michaels',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Sawmill',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Dennehotso',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Many Farms',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Round Rock',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Red Mesa',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Burnside',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Rock Point',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Nazlini',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Steamboat',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Nutrioso',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Rough Rock',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Vernon',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Cornfields',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Klagetoh',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Del Muerto',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Alpine',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Sehili',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Oak Springs',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Wide Ruins',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Lupton',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Toyei',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Concho',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Greer',
        county: 'Apache',
      },
      {
        state: 'Arizona',
        city: 'Sierra Vista',
        county: 'Cochise',
      },
      {
        state: 'Arizona',
        city: 'Douglas',
        county: 'Cochise',
      },
      {
        state: 'Arizona',
        city: 'Sierra Vista Southeast',
        county: 'Cochise',
      },
      {
        state: 'Arizona',
        city: 'Benson',
        county: 'Cochise',
      },
      {
        state: 'Arizona',
        city: 'Bisbee',
        county: 'Cochise',
      },
      {
        state: 'Arizona',
        city: 'Willcox',
        county: 'Cochise',
      },
      {
        state: 'Arizona',
        city: 'Whetstone',
        county: 'Cochise',
      },
      {
        state: 'Arizona',
        city: 'Huachuca city',
        county: 'Cochise',
      },
      {
        state: 'Arizona',
        city: 'Pirtleville',
        county: 'Cochise',
      },
      {
        state: 'Arizona',
        city: 'St. David',
        county: 'Cochise',
      },
      {
        state: 'Arizona',
        city: 'Mescal',
        county: 'Cochise',
      },
      {
        state: 'Arizona',
        city: 'Naco',
        county: 'Cochise',
      },
      {
        state: 'Arizona',
        city: 'Tombstone',
        county: 'Cochise',
      },
      {
        state: 'Arizona',
        city: 'Sunsites',
        county: 'Cochise',
      },
      {
        state: 'Arizona',
        city: 'Miracle Valley',
        county: 'Cochise',
      },
      {
        state: 'Arizona',
        city: 'Bowie',
        county: 'Cochise',
      },
      {
        state: 'Arizona',
        city: 'Elfrida',
        county: 'Cochise',
      },
      {
        state: 'Arizona',
        city: 'Sunizona',
        county: 'Cochise',
      },
      {
        state: 'Arizona',
        city: 'Palominas',
        county: 'Cochise',
      },
      {
        state: 'Arizona',
        city: 'San Simon',
        county: 'Cochise',
      },
      {
        state: 'Arizona',
        city: 'McNeal',
        county: 'Cochise',
      },
      {
        state: 'Arizona',
        city: 'Dragoon',
        county: 'Cochise',
      },
      {
        state: 'Arizona',
        city: 'Flagstaff',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Tuba city',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Page',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Doney Park',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Williams',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Kachina Village',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Timberline-Fernwood',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Fort Valley',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Kaibito',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Kaibab Estates West',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Mountain View Ranches',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Grand Canyon Village',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'LeChee',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Red Lake',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Parks',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Moenkopi',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Leupp',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Fredonia',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Bellemont',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Blue Ridge',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Cameron',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Mountainaire',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Munds Park',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Tolani Lake',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Bitter Springs',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Greenehaven',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Tusayan',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Oak Creek Canyon',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Tonalea',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Valle',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Mormon Lake',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Supai',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Payson',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Globe',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'San Carlos',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Central Heights-Midland city',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Star Valley',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Canyon Day',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Pine',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Peridot',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Miami',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Tonto Basin',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Six Shooter Canyon',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Claypool',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Mesa del Caballo',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Strawberry',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Roosevelt Estates',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Icehouse Canyon',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Gisela',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Round Valley',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Cedar Creek',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Young',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Hayden',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Wheatfields',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Carrizo',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'East Globe',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Pinal',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Dripping Springs',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Freedom Acres',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Jakes Corner',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Oxbow Estates',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Cutter',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Tonto Village',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Deer Creek',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Beaver Valley',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Mead Ranch',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Whispering Pines',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Christopher Creek',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Copper Hill',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Rock House',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'East Verde Estates',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Kohls Ranch',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Flowing Springs',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Haigler Creek',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'El Capitan',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Washington Park',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Hunter Creek',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Rye',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Geronimo Estates',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Bear Flat',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Roosevelt',
        county: 'Gila',
      },
      {
        state: 'Arizona',
        city: 'Safford',
        county: 'Graham',
      },
      {
        state: 'Arizona',
        city: 'Thatcher',
        county: 'Graham',
      },
      {
        state: 'Arizona',
        city: 'Pima',
        county: 'Graham',
      },
      {
        state: 'Arizona',
        city: 'Swift Trail Junction',
        county: 'Graham',
      },
      {
        state: 'Arizona',
        city: 'Bylas',
        county: 'Graham',
      },
      {
        state: 'Arizona',
        city: 'Cactus Flats',
        county: 'Graham',
      },
      {
        state: 'Arizona',
        city: 'Solomon',
        county: 'Graham',
      },
      {
        state: 'Arizona',
        city: 'Central',
        county: 'Graham',
      },
      {
        state: 'Arizona',
        city: 'Fort Thomas',
        county: 'Graham',
      },
      {
        state: 'Arizona',
        city: 'San Jose',
        county: 'Graham',
      },
      {
        state: 'Arizona',
        city: 'Bryce',
        county: 'Graham',
      },
      {
        state: 'Arizona',
        city: 'Clifton',
        county: 'Greenlee',
      },
      {
        state: 'Arizona',
        city: 'Morenci',
        county: 'Greenlee',
      },
      {
        state: 'Arizona',
        city: 'Duncan',
        county: 'Greenlee',
      },
      {
        state: 'Arizona',
        city: 'York',
        county: 'Greenlee',
      },
      {
        state: 'Arizona',
        city: 'Franklin',
        county: 'Greenlee',
      },
      {
        state: 'Arizona',
        city: 'Parker',
        county: 'La Paz',
      },
      {
        state: 'Arizona',
        city: 'Quartzsite',
        county: 'La Paz',
      },
      {
        state: 'Arizona',
        city: 'Cienega Springs',
        county: 'La Paz',
      },
      {
        state: 'Arizona',
        city: 'Bouse',
        county: 'La Paz',
      },
      {
        state: 'Arizona',
        city: 'Ehrenberg',
        county: 'La Paz',
      },
      {
        state: 'Arizona',
        city: 'Salome',
        county: 'La Paz',
      },
      {
        state: 'Arizona',
        city: 'Parker Strip',
        county: 'La Paz',
      },
      {
        state: 'Arizona',
        city: 'Bluewater',
        county: 'La Paz',
      },
      {
        state: 'Arizona',
        city: 'Brenda',
        county: 'La Paz',
      },
      {
        state: 'Arizona',
        city: 'La Paz Valley',
        county: 'La Paz',
      },
      {
        state: 'Arizona',
        city: 'Vicksburg',
        county: 'La Paz',
      },
      {
        state: 'Arizona',
        city: 'Wenden',
        county: 'La Paz',
      },
      {
        state: 'Arizona',
        city: 'Poston',
        county: 'La Paz',
      },
      {
        state: 'Arizona',
        city: 'Cibola',
        county: 'La Paz',
      },
      {
        state: 'Arizona',
        city: 'Utting',
        county: 'La Paz',
      },
      {
        state: 'Arizona',
        city: 'Alamo Lake',
        county: 'La Paz',
      },
      {
        state: 'Arizona',
        city: 'Sunwest',
        county: 'La Paz',
      },
      {
        state: 'Arizona',
        city: 'Phoenix',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Mesa',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Chandler',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Gilbert',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Avondale',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Glendale',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Scottsdale',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Peoria',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Tempe',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Surprise',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Goodyear',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Buckeye',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Queen Creek',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Sun city',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'El Mirage',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Sun city West',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Fountain Hills',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Anthem',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'New River',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Sun Lakes',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Paradise Valley',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Wickenburg',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Tolleson',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Youngtown',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Litchfield Park',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Citrus Park',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Guadalupe',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Cave Creek',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Carefree',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Rio Verde',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Gila Bend',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Komatke',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Gila Crossing',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Wittmann',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Circle city',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Maricopa Colony',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Aguila',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Morristown',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Arlington',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Wintersburg',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Theba',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Kaka',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Tonopah',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Lake Havasu city',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Bullhead city',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Kingman',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Fort Mohave',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'New Kingman-Butler',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Golden Valley',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Mohave Valley',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Valle Vista',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Colorado city',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Desert Hills',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Beaver Dam',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Scenic',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Dolan Springs',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Meadview',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Centennial Park',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Peach Springs',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Golden Shores',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Arizona Village',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Willow Valley',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Walnut Creek',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Mesquite Creek',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Cane Beds',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Hackberry',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Lazy Y U',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Clacks Canyon',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Chloride',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'So-Hi',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'White Hills',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Crystal Beach',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Kaibab',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Pinion Pines',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Antares',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Katherine',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Pine Lake',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Moccasin',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Crozier',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Littlefield',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Truxton',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Yucca',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Mojave Ranch Estates',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Oatman',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Wikieup',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Valentine',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Topock',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'McConnico',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Grand Canyon West',
        county: 'Mohave',
      },
      {
        state: 'Arizona',
        city: 'Show Low',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Winslow',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Snowflake',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Kayenta',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Holbrook',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Whiteriver',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Pinetop-Lakeside',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Taylor',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Lake of the Woods',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'White Mountain Lake',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Linden',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Heber-Overgaard',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Joseph city',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'North Fork',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'First Mesa',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Second Mesa',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Pinetop Country Club',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Cibecue',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Dilkon',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Wagon Wheel',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Seven Mile',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Shongopovi',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Kykotsmovi Village',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Chilchinbito',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Hotevilla-Bacavi',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Hondah',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Pinon',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Whitecone',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Rainbow city',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Turkey Creek',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Low Mountain',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Pinedale',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Tees Toh',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'East Fork',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Keams Canyon',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Shonto',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Indian Wells',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Clay Springs',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Greasewood',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Winslow West',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Jeddito',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Fort Apache',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Shumway',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Hard Rock',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Seba Dalkai',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Sun Valley',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Woodruff',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Oljato-Monument Valley',
        county: 'Navajo',
      },
      {
        state: 'Arizona',
        city: 'Tucson',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Casas Adobes',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Marana',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Catalina Foothills',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Oro Valley',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Sahuarita',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Drexel Heights',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Green Valley',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Flowing Wells',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Tanque Verde',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Vail',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Valencia West',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Tucson Estates',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Tucson Mountains',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Corona de Tucson',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Picture Rocks',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Catalina',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Avra Valley',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Rincon Valley',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Summit',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Three Points',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'South Tucson',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Ajo',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Sells',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Arivaca Junction',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Santa Rosa',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Nelson',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Arivaca',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Topawa',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Elephant Head',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'South Komelik',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Pisinemo',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'San Miguel',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Haivana Nakya',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Maish Vaya',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Ventana',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Ali Chuk',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Gu Oidak',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Why',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Nolic',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Ali Molina',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Chiawuli Tak',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Kleindale',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Anegam',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Wahak Hotrontk',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Ko Vaya',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Summerhaven',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Cowlic',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Charco',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Ali Chukson',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Ak Chin',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Willow Canyon',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Comobabi',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'Rillito',
        county: 'Pima',
      },
      {
        state: 'Arizona',
        city: 'San Tan Valley',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Maricopa',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Casa Grande',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Apache Junction',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Florence',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Eloy',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Coolidge',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Saddlebrooke',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Gold Canyon',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Arizona city',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'San Manuel',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Red Rock',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Oracle',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Superior',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Sacaton',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Kearny',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Blackwater',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Casa Blanca',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Mammoth',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Ak-Chin Village',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Queen Valley',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Upper Santan Village',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Dudleyville',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Cactus Forest',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Sacaton Flats Village',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Stotonic Village',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Stanfield',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Picacho',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Sacate Village',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Winkelman',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Lower Santan Village',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Goodyear Village',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Chuichu',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Top-of-the-World',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Vaiva Vo',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Sweet Water Village',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Wet Camp Village',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Campo Bonito',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Santa Cruz',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Tat Momoli',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Kohatk',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Rio Rico',
        county: 'Santa Cruz',
      },
      {
        state: 'Arizona',
        city: 'Nogales',
        county: 'Santa Cruz',
      },
      {
        state: 'Arizona',
        city: 'Tubac',
        county: 'Santa Cruz',
      },
      {
        state: 'Arizona',
        city: 'Patagonia',
        county: 'Santa Cruz',
      },
      {
        state: 'Arizona',
        city: 'Sonoita',
        county: 'Santa Cruz',
      },
      {
        state: 'Arizona',
        city: 'Kino Springs',
        county: 'Santa Cruz',
      },
      {
        state: 'Arizona',
        city: 'Elgin',
        county: 'Santa Cruz',
      },
      {
        state: 'Arizona',
        city: 'Tumacacori-Carmen',
        county: 'Santa Cruz',
      },
      {
        state: 'Arizona',
        city: 'Amado',
        county: 'Santa Cruz',
      },
      {
        state: 'Arizona',
        city: 'Beyerville',
        county: 'Santa Cruz',
      },
      {
        state: 'Arizona',
        city: 'Prescott Valley',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Prescott',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Chino Valley',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Verde Village',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Cottonwood',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Camp Verde',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Sedona',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Village of Oak Creek',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Williamson',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Paulden',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Clarkdale',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Lake Montezuma',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Dewey-Humboldt',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Cornville',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Cordes Lakes',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Black Canyon city',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Bagdad',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Congress',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Spring Valley',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Mayer',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Wilhoit',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Yarnell',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Seligman',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Ash Fork',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Peeples Valley',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Jerome',
        county: 'Yavapai',
      },
      {
        state: 'Arizona',
        city: 'Yuma',
        county: 'Yuma',
      },
      {
        state: 'Arizona',
        city: 'San Luis',
        county: 'Yuma',
      },
      {
        state: 'Arizona',
        city: 'Fortuna Foothills',
        county: 'Yuma',
      },
      {
        state: 'Arizona',
        city: 'Somerton',
        county: 'Yuma',
      },
      {
        state: 'Arizona',
        city: 'Avenue B and C',
        county: 'Yuma',
      },
      {
        state: 'Arizona',
        city: 'Wellton',
        county: 'Yuma',
      },
      {
        state: 'Arizona',
        city: 'Donovan Estates',
        county: 'Yuma',
      },
      {
        state: 'Arizona',
        city: 'Gadsden',
        county: 'Yuma',
      },
      {
        state: 'Arizona',
        city: 'Rancho Mesa Verde',
        county: 'Yuma',
      },
      {
        state: 'Arizona',
        city: 'El Prado Estates',
        county: 'Yuma',
      },
      {
        state: 'Arizona',
        city: 'Tacna',
        county: 'Yuma',
      },
      {
        state: 'Arizona',
        city: 'Wall Lane',
        county: 'Yuma',
      },
      {
        state: 'Arizona',
        city: 'Dateland',
        county: 'Yuma',
      },
      {
        state: 'Arizona',
        city: 'Wellton Hills',
        county: 'Yuma',
      },
      {
        state: 'Arizona',
        city: 'Yuma Proving Ground',
        county: 'Yuma',
      },
      {
        state: 'Arizona',
        city: 'Drysdale',
        county: 'Yuma',
      },
      {
        state: 'Arizona',
        city: 'Martinez Lake',
        county: 'Yuma',
      },
      {
        state: 'Arizona',
        city: 'Padre Ranchitos',
        county: 'Yuma',
      },
      {
        state: 'Arizona',
        city: 'Buckshot',
        county: 'Yuma',
      },
      {
        state: 'Arizona',
        city: 'Aztec',
        county: 'Yuma',
      },
      {
        state: 'Arizona',
        city: 'Waddell',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Fort McDowell',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Chandler Heights',
        county: 'Maricopa',
      },
      {
        state: 'Arizona',
        city: 'Forest Lakes Estates',
        county: 'Coconino',
      },
      {
        state: 'Arizona',
        city: 'Bapchule',
        county: 'Pinal',
      },
      {
        state: 'Arizona',
        city: 'Mobile',
        county: 'Maricopa',
      },
      {
        state: '',
        city: '',
        county: '',
      },
      {
        state: 'Connecticut',
        city: 'Belle Haven',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Bethel',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Botsford',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Bridgeport',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Brookfield Center',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Brookfield',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Brookfld Center',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Champion International',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Clairol Co',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Conn Bank & Trust',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Conn National Bank',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Controlled Distribution',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Cos Cob',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Danbury',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Darien',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'East Norwalk',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Easton',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Fairfield',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Gecc',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'General Electric',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Georgetown',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Glenbrook',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Glenville',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Greens Farms',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Greenwich',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Grolier Entrprz Inc',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Hawleyville',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Huntington',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'International Masters Pub',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'M B I Inc',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Monroe',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'New Canaan',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'New Fairfield',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Newtown',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Noroton Heights',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Noroton',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Norwalk',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Old Greenwich',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Perkin Elmer Corp',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Pitney Bowes Inc',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Promotion Marketing Ser Inc',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Promotion Systems Inc',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Promotional Dev Inc',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Redding Center',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Redding Ridge',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Redding',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Ridgefield',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Ridgeway',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Riverside',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Rowayton',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Sandy Hook',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Saugatuck',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Setan Industries',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Shared Zip For Brm',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Shelton',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Sherman',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'South Norwalk',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Southport',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Springdale',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Stamford',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Stepney',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Stevenson',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Stratford',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Stratmar Fulfillment Corp',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Tokeneke',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Trumbull',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Union Carbide Corp',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Upper Stepney',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Websters Unified',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'West Redding',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Weston',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Westport',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'Wilton',
        county: 'Fairfield',
      },
      {
        state: 'Connecticut',
        city: 'A A R P Pharmacy',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Accr A Data',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Aetna Insurance',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Aetna Life',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Allstate',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Avon',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Bank of America',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Barry Square',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Berlin',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Bishops Corner',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Bissell',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Bloomfield',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Blue Hills',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Bradley International Airpor',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Bristol',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Broad Brook',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Burlington',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'C T Mutual Insurance Co',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Canton Center',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Canton',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Central',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Cherry Brook',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Collinsville',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Corbins Corner',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Ct Dept of Motor Vehicles',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'East Berlin',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'East Glastonbury',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'East Granby',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'East Hampton',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'East Windsor Hl',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'East Windsor',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Elmwood',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Enfield',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Farmington',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Forbes Village',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Forestville',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Glastonbury',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Granby',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Hartford Insurance Group',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Hartford National Bank',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Hartford',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Hartfrd',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Hazardville',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'IRS',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'J C Penney Co',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Kenington',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Kensington',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Lake Garda',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Main Office',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Manchester',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Marion',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Marlborough',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'McDougal Correctional Fclty',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Melrose',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Milldale',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'New Brit',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'New Britain',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Newington',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Newington',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'North Canton',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'North Granby',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'North Thompsonville',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Northeast Area',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Plainville',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Plantsville',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Poquonock',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Rocky Hill',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Scantic',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Scitico',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Silver Lane',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Simbury',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Simsbury',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'South Glastonbury',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'South Windsor',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Southington',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Suffield',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Talcott Village',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Tariffville',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'The Exchange at Talcott Vill',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Thompsonville',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Travelers Ins',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Unionville',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Unity Plaza',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'University of Ct Health Center',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Wapping',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Warehouse Point',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Weathersfield',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Weatogue',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'West Farms Mall',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'West Granby',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'West Hartford',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'West Hartland',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'West Simsbury',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'West Suffield',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Weth',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Wethersfield',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Wilson',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Windsor Locks',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Windsor',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Windsorville',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Bakersville',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Bantam',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Barkhamsted',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Bethlehem',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Bridgewater',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Canaan',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Colbrook',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Colebrook',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Cornwall Bridge',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Cornwall',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'East Canaan',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Falls Village',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Gaylordsville',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Goshen',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Harwinton',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Harwinton',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Hotchkiss School',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Kent',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Lakeside',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Lakeville',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Litchfield',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'M B I Inc',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Marble Dale',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Morris',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Nepaug',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'New Hartford',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'New Milford',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'New Preston Marble Dale',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'New Preston',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'No Canaan',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Norfolk',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'North Canaan',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Northfield',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Northville',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Oakville',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Oakville',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Pequabuck',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Pine Meadow',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Pleasant Valley',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Plymouth',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Riverton',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Roxbury',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Salisbury',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Sharon Valley',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Sharon',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'South Canaan',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'South Kent',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Taconic',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Terryville',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Thomaston',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Torrington',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Torrington',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Twin Lakes',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Warren',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Washington Depot',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Washington Green',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Washington',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Watertown',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'West Cornwall',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'West Woods',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Winchester Center',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Winchester',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Winsted',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Woodbury',
        county: 'Litchfield',
      },
      {
        state: 'Connecticut',
        city: 'Centerbrook',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Chester',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Clinton',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Cobalt',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Cromwell',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Deep River',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Durham',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'East Haddam',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Essex',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Fenwick',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Haddam Neck',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Haddam',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Higganum',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Ivoryton',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Killingworth',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Middle Haddam',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Middlefield',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Middletown',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Moodus',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Old Saybrook',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Portland',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Rockfall',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Wesleyan',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Westbrook',
        county: 'Middlesex',
      },
      {
        state: 'Connecticut',
        city: 'Advertising Distr Co',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Allingtown',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Ansonia',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Beacon Falls',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Bethany',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Bloomingdales by Mail Ltd',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Branford',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Centerville-Mount Carmel',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Cheshire',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Conn Bank & Trust Co',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Ct Gen Med Claims Office',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Derby',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'East End',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'East Haven',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Fair Haven',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Fosdick Corp',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Guilford',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Hamden',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'International Masters Pub',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Macys By Mail',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Madison',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Meriden',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Middlebury',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Milford',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Mount Carmel',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Naugatuck',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'New Haven',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'North Branford',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'North Haven',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Northford',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Orange',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Oxford',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Plaza',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Prospect',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Seymour',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'South Britain',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Southbury',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'U S Postal Service',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Union city',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Uniroyal Inc',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Wallingford',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Waterbury',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'West Haven',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Westville',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Whitneyville',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Wolcott',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Woodbridge',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Yalesville',
        county: 'New Haven',
      },
      {
        state: 'Connecticut',
        city: 'Baltic',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Borough',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Bozrah',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Canterbury',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Center Groton',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Chesterfield',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Colchester',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'East Lyme',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Exeter',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Fitchville',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Fort Trumbull',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Franklin Hill',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Franklin',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Gales Ferry',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Gilman',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Glasgo',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Griswold',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Groton Long Point',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Groton',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Hadlyme',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Hanover',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Hopeville',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Jewett city',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Jordan Village',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Jupiter Point',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Lebanon',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Ledyard',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Lisbon',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Lords Point',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Lyme',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Mashantucket',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Masons Island',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Millstone',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Montville',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Mystic',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Naval Submarine Base',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Navsub Base',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'New London',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Niantic',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Noank',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'North Franklin',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'North Lyme',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'North Stonington',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'North Westchester',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Norwich',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Norwichtown',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Oakdale',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Occum',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Old Lyme',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Old Mystic',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Pawcatuck',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Point O Woods',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Poquetanuck',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Poquonock Bridge',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Preston',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Quaker Hill',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Salem',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Shawondassee',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'South Lyme',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Sprague',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Stonington',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Sub Base New London',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Submarine Base',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Taftville',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'U S Coast Guard Acadamy',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Uncasville',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'United states Coast Guard Acadamy',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Versailles',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Voluntown',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Waterford',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'West Mystic',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Yantic',
        county: 'New London',
      },
      {
        state: 'Connecticut',
        city: 'Amston',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Andover',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Ashford',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Bolton',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Columbia',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Connecticut state Prison',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Coventry',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'East Willington',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Ellington',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Gurleyville',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Hebron',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Manchester',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Mansfield Center',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Mansfield Depot',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Mansfield Hollow',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Mansfield',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Merrow',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Rockville',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Somers',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Somersville',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'South Willington',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Stafford Sp',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Stafford Springs',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Stafford',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Staffordville',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Storrs Mansfield',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Storrs',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Talcottville',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Tolland',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Turnpike',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Union',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'University of Ct',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Vernon Rockville',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Vernon',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'West Ashford',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'West Stafford',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'West Willington',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Willington',
        county: 'Tolland',
      },
      {
        state: 'Connecticut',
        city: 'Abington',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Ashford',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Ballouville',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'BKLN',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Brooklyn',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Canterbury',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Central Village',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Chaplin',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Chestnut Hill',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Conantville',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Danielson',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Dayville',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'East Brooklyn',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'East Killingly',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'East Putnam',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'East Thompson',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'East Woodstock',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Eastford',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Elliot',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Fabyan',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Grosvenor Dale',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Hampton',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Killingly Center',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Killingly',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Laurel Hill',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Mansfield Center',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Mechanicsville',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Moosup',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'North Grosvendale',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'North Sterling',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'North Windham',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Oneco',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Perkins Corner',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Plainfield',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Pomfret Center',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Pomfret Landing',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Pomfret',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Ponfret Center',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Putman',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Putnam Heights',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Putnm',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Quinebaug',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Rhodesville',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Rogers',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Sawyer District',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Scotland',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'South Canterbury',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'South Chaplin',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'South Killingly',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'South Windham',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'South Woodstock',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Sterling',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Thompson',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Warrenville',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Wauregan',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'West Wauregan',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Willimantic',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Windham',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Woodstock Valley',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Woodstock',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'East Hartford',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Putnam',
        county: 'Windham',
      },
      {
        state: 'Connecticut',
        city: 'Hartland',
        county: 'Hartford',
      },
      {
        state: 'Connecticut',
        city: 'Sailsbury',
        county: 'Litchfield',
      },
      {
        state: '',
        city: '',
        county: '',
      },
      {
        state: 'New York',
        city: 'Albion',
        county: 'Albany',
      },
      {
        state: 'New York',
        city: 'Calcium',
        county: 'Albany',
      },
      {
        state: 'New York',
        city: 'Chittenango',
        county: 'Albany',
      },
      {
        state: 'New York',
        city: 'Congers',
        county: 'Albany',
      },
      {
        state: 'New York',
        city: 'Cumminsville',
        county: 'Albany',
      },
      {
        state: 'New York',
        city: 'Deer Park',
        county: 'Albany',
      },
      {
        state: 'New York',
        city: 'East Shoreham',
        county: 'Albany',
      },
      {
        state: 'New York',
        city: 'Harris Hill',
        county: 'Albany',
      },
      {
        state: 'New York',
        city: 'Jericho',
        county: 'Albany',
      },
      {
        state: 'New York',
        city: 'Lake Huntington',
        county: 'Albany',
      },
      {
        state: 'New York',
        city: 'Larchmont',
        county: 'Albany',
      },
      {
        state: 'New York',
        city: 'Mannsville',
        county: 'Albany',
      },
      {
        state: 'New York',
        city: 'New city',
        county: 'Albany',
      },
      {
        state: 'New York',
        city: 'Strykersville',
        county: 'Albany',
      },
      {
        state: 'New York',
        city: 'New Hamburg',
        county: 'Allegany',
      },
      {
        state: 'New York',
        city: 'Prospect',
        county: 'Allegany',
      },
      {
        state: 'New York',
        city: 'Selden',
        county: 'Allegany',
      },
      {
        state: 'New York',
        city: 'Setauket',
        county: 'Allegany',
      },
      {
        state: 'New York',
        city: 'Shoreham',
        county: 'Allegany',
      },
      {
        state: 'New York',
        city: 'Stottville',
        county: 'Allegany',
      },
      {
        state: 'New York',
        city: 'Akwesasne',
        county: 'Bronx',
      },
      {
        state: 'New York',
        city: 'Ames',
        county: 'Broome',
      },
      {
        state: 'New York',
        city: 'Central Islip',
        county: 'Broome',
      },
      {
        state: 'New York',
        city: 'Clayville',
        county: 'Broome',
      },
      {
        state: 'New York',
        city: 'Cooperstown',
        county: 'Broome',
      },
      {
        state: 'New York',
        city: 'Fonda',
        county: 'Broome',
      },
      {
        state: 'New York',
        city: 'Jefferson',
        county: 'Broome',
      },
      {
        state: 'New York',
        city: 'Morrisville',
        county: 'Broome',
      },
      {
        state: 'New York',
        city: 'Phoenix',
        county: 'Broome',
      },
      {
        state: 'New York',
        city: 'Waverly',
        county: 'Broome',
      },
      {
        state: 'New York',
        city: 'Clarence Center',
        county: 'Cattaraugus',
      },
      {
        state: 'New York',
        city: 'Fultonville',
        county: 'Cattaraugus',
      },
      {
        state: 'New York',
        city: 'Johnstown',
        county: 'Cattaraugus',
      },
      {
        state: 'New York',
        city: 'Meridian',
        county: 'Cattaraugus',
      },
      {
        state: 'New York',
        city: 'Oak Beach',
        county: 'Cattaraugus',
      },
      {
        state: 'New York',
        city: 'Old Westbury',
        county: 'Cattaraugus',
      },
      {
        state: 'New York',
        city: 'Pierrepont Manor',
        county: 'Cattaraugus',
      },
      {
        state: 'New York',
        city: 'Rochester Institute of Technology',
        county: 'Cattaraugus',
      },
      {
        state: 'New York',
        city: 'Schroon Lake',
        county: 'Cattaraugus',
      },
      {
        state: 'New York',
        city: 'Schuylerville',
        county: 'Cattaraugus',
      },
      {
        state: 'New York',
        city: 'Searingtown',
        county: 'Cattaraugus',
      },
      {
        state: 'New York',
        city: 'South Floral Park',
        county: 'Cattaraugus',
      },
      {
        state: 'New York',
        city: 'Binghamton',
        county: 'Cayuga',
      },
      {
        state: 'New York',
        city: 'Medford',
        county: 'Cayuga',
      },
      {
        state: 'New York',
        city: 'Milton',
        county: 'Cayuga',
      },
      {
        state: 'New York',
        city: 'Ogdensburg',
        county: 'Cayuga',
      },
      {
        state: 'New York',
        city: 'Penn Yan',
        county: 'Cayuga',
      },
      {
        state: 'New York',
        city: 'Plainedge',
        county: 'Cayuga',
      },
      {
        state: 'New York',
        city: 'Tappan',
        county: 'Cayuga',
      },
      {
        state: 'New York',
        city: 'West Babylon',
        county: 'Cayuga',
      },
      {
        state: 'New York',
        city: 'Bellerose Terrace',
        county: 'Chautauqua',
      },
      {
        state: 'New York',
        city: 'Clinton',
        county: 'Chautauqua',
      },
      {
        state: 'New York',
        city: 'Delanson',
        county: 'Chautauqua',
      },
      {
        state: 'New York',
        city: 'Lake Delta',
        county: 'Chautauqua',
      },
      {
        state: 'New York',
        city: 'Livonia Center',
        county: 'Chautauqua',
      },
      {
        state: 'New York',
        city: 'Long Beach',
        county: 'Chautauqua',
      },
      {
        state: 'New York',
        city: 'Manhattan',
        county: 'Chautauqua',
      },
      {
        state: 'New York',
        city: 'New Rochelle',
        county: 'Chautauqua',
      },
      {
        state: 'New York',
        city: 'North Granville',
        county: 'Chautauqua',
      },
      {
        state: 'New York',
        city: 'North Great River',
        county: 'Chautauqua',
      },
      {
        state: 'New York',
        city: 'Old Forge',
        county: 'Chautauqua',
      },
      {
        state: 'New York',
        city: 'Roscoe',
        county: 'Chautauqua',
      },
      {
        state: 'New York',
        city: 'Sinclairville',
        county: 'Chautauqua',
      },
      {
        state: 'New York',
        city: 'South Glens Falls',
        county: 'Chautauqua',
      },
      {
        state: 'New York',
        city: 'Springville',
        county: 'Chautauqua',
      },
      {
        state: 'New York',
        city: 'Thiells',
        county: 'Chautauqua',
      },
      {
        state: 'New York',
        city: 'Washington Heights',
        county: 'Chautauqua',
      },
      {
        state: 'New York',
        city: 'Wells Bridge',
        county: 'Chautauqua',
      },
      {
        state: 'New York',
        city: 'Arkport',
        county: 'Chemung',
      },
      {
        state: 'New York',
        city: 'Greenvale',
        county: 'Chemung',
      },
      {
        state: 'New York',
        city: 'Hemlock',
        county: 'Chemung',
      },
      {
        state: 'New York',
        city: 'Levittown',
        county: 'Chemung',
      },
      {
        state: 'New York',
        city: 'Quiogue',
        county: 'Chemung',
      },
      {
        state: 'New York',
        city: 'Smithville Flats',
        county: 'Chemung',
      },
      {
        state: 'New York',
        city: 'Sparrow Bush',
        county: 'Chemung',
      },
      {
        state: 'New York',
        city: 'Stannards',
        county: 'Chemung',
      },
      {
        state: 'New York',
        city: 'Farmingdale',
        county: 'Chenango',
      },
      {
        state: 'New York',
        city: 'Rifton',
        county: 'Chenango',
      },
      {
        state: 'New York',
        city: 'staten Island',
        county: 'Chenango',
      },
      {
        state: 'New York',
        city: 'Bridgehampton',
        county: 'Clinton',
      },
      {
        state: 'New York',
        city: 'Manhasset Hills',
        county: 'Clinton',
      },
      {
        state: 'New York',
        city: 'North Patchogue',
        county: 'Clinton',
      },
      {
        state: 'New York',
        city: 'North Wantagh',
        county: 'Clinton',
      },
      {
        state: 'New York',
        city: 'Oriskany',
        county: 'Clinton',
      },
      {
        state: 'New York',
        city: 'Scottsville',
        county: 'Clinton',
      },
      {
        state: 'New York',
        city: 'Springs',
        county: 'Clinton',
      },
      {
        state: 'New York',
        city: 'Tribes Hill',
        county: 'Clinton',
      },
      {
        state: 'New York',
        city: 'Walton Park',
        county: 'Clinton',
      },
      {
        state: 'New York',
        city: 'Wantagh',
        county: 'Clinton',
      },
      {
        state: 'New York',
        city: 'West Hampton Dunes',
        county: 'Clinton',
      },
      {
        state: 'New York',
        city: 'Frewsburg',
        county: 'Columbia',
      },
      {
        state: 'New York',
        city: 'Monticello',
        county: 'Columbia',
      },
      {
        state: 'New York',
        city: 'Niagara Falls',
        county: 'Columbia',
      },
      {
        state: 'New York',
        city: 'North Merrick',
        county: 'Columbia',
      },
      {
        state: 'New York',
        city: 'Oriskany Falls',
        county: 'Columbia',
      },
      {
        state: 'New York',
        city: 'Painted Post',
        county: 'Columbia',
      },
      {
        state: 'New York',
        city: 'Plandome Manor',
        county: 'Columbia',
      },
      {
        state: 'New York',
        city: 'Rensselaer',
        county: 'Columbia',
      },
      {
        state: 'New York',
        city: 'Rensselaer Falls',
        county: 'Columbia',
      },
      {
        state: 'New York',
        city: 'West Elmira',
        county: 'Columbia',
      },
      {
        state: 'New York',
        city: 'Canaseraga',
        county: 'Cortland',
      },
      {
        state: 'New York',
        city: 'Laurel',
        county: 'Cortland',
      },
      {
        state: 'New York',
        city: 'Northwest Ithaca',
        county: 'Cortland',
      },
      {
        state: 'New York',
        city: 'Odessa',
        county: 'Cortland',
      },
      {
        state: 'New York',
        city: 'Walden',
        county: 'Cortland',
      },
      {
        state: 'New York',
        city: 'Sag Harbor',
        county: 'Delaware',
      },
      {
        state: 'New York',
        city: 'South Huntington',
        county: 'Delaware',
      },
      {
        state: 'New York',
        city: 'Terryville',
        county: 'Delaware',
      },
      {
        state: 'New York',
        city: 'Tioga Terrace',
        county: 'Delaware',
      },
      {
        state: 'New York',
        city: 'Vassar College',
        county: 'Delaware',
      },
      {
        state: 'New York',
        city: 'Village of the Branch',
        county: 'Delaware',
      },
      {
        state: 'New York',
        city: 'Watervliet',
        county: 'Delaware',
      },
      {
        state: 'New York',
        city: 'Altamont',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Clark Mills',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Cumberland Head',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Fort Salonga',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Franklin Square',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Herrings',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Hewlett Harbor',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Island Park',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Lackawanna',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Lime Lake',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Lincolndale',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Lyons Falls',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Maybrook',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'New Baltimore',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'North Creek',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'North Sea',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'North Syracuse',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Northeast Ithaca',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Olcott',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Old Bethpage',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Old Brookville',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Otter Lake',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Port Washington North',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Preston-Potter Hollow',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Redford',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Redwood',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Sand Ridge',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Schenevus',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Shirley',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'South Dayton',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Spackenkill',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Titusville',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Watkins Glen',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'West Point',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Whitesboro',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Albany',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Brightwaters',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Centre Island',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Chadwicks',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Chappaqua',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Chester',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Fort Montgomery',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Fort Plain',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Freedom Plains',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Glen Head',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Great Neck',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Herricks',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Hillside',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Hopewell Junction',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Hortonville',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Jacksonville',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Jamestown West',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Johnson city',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Lake Success',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Lawrence',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Lockport',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Lorenz Park',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Mountain Lodge Park',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Myers Corner',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'North Babylon',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'South Farmingdale',
        county: 'Erie',
      },
      {
        state: 'New York',
        city: 'Lakewood',
        county: 'Essex',
      },
      {
        state: 'New York',
        city: 'Massapequa Park',
        county: 'Essex',
      },
      {
        state: 'New York',
        city: 'Palenville',
        county: 'Essex',
      },
      {
        state: 'New York',
        city: 'Port Ewen',
        county: 'Essex',
      },
      {
        state: 'New York',
        city: 'Shorehaven',
        county: 'Essex',
      },
      {
        state: 'New York',
        city: 'Yorktown Heights',
        county: 'Essex',
      },
      {
        state: 'New York',
        city: 'Green Island',
        county: 'Franklin',
      },
      {
        state: 'New York',
        city: 'Highland Falls',
        county: 'Franklin',
      },
      {
        state: 'New York',
        city: 'Saugerties South',
        county: 'Franklin',
      },
      {
        state: 'New York',
        city: 'South Blooming Grove',
        county: 'Franklin',
      },
      {
        state: 'New York',
        city: 'Uniondale',
        county: 'Franklin',
      },
      {
        state: 'New York',
        city: 'Central Square',
        county: 'Fulton',
      },
      {
        state: 'New York',
        city: 'East Massapequa',
        county: 'Fulton',
      },
      {
        state: 'New York',
        city: 'Stittville',
        county: 'Fulton',
      },
      {
        state: 'New York',
        city: 'Centerport',
        county: 'Genesee',
      },
      {
        state: 'New York',
        city: 'Pultneyville',
        county: 'Genesee',
      },
      {
        state: 'New York',
        city: 'Ocean Beach',
        county: 'Greene',
      },
      {
        state: 'New York',
        city: 'Port Washington',
        county: 'Greene',
      },
      {
        state: 'New York',
        city: 'Pulaski',
        county: 'Greene',
      },
      {
        state: 'New York',
        city: 'Salisbury Center',
        county: 'Greene',
      },
      {
        state: 'New York',
        city: 'Schuyler Lake',
        county: 'Greene',
      },
      {
        state: 'New York',
        city: 'Shrub Oak',
        county: 'Greene',
      },
      {
        state: 'New York',
        city: 'South Cairo',
        county: 'Greene',
      },
      {
        state: 'New York',
        city: 'Syracuse',
        county: 'Greene',
      },
      {
        state: 'New York',
        city: 'Wanakah',
        county: 'Greene',
      },
      {
        state: 'New York',
        city: 'White Lake',
        county: 'Greene',
      },
      {
        state: 'New York',
        city: 'Wyandanch',
        county: 'Greene',
      },
      {
        state: 'New York',
        city: 'Sylvan Beach',
        county: 'Hamilton',
      },
      {
        state: 'New York',
        city: 'East Quogue',
        county: 'Herkimer',
      },
      {
        state: 'New York',
        city: 'Hamilton College',
        county: 'Herkimer',
      },
      {
        state: 'New York',
        city: 'Malden-on-Hudson',
        county: 'Herkimer',
      },
      {
        state: 'New York',
        city: 'Queens',
        county: 'Herkimer',
      },
      {
        state: 'New York',
        city: 'Rock Hill',
        county: 'Herkimer',
      },
      {
        state: 'New York',
        city: 'Saratoga Springs',
        county: 'Herkimer',
      },
      {
        state: 'New York',
        city: 'Scarsdale',
        county: 'Herkimer',
      },
      {
        state: 'New York',
        city: 'Staatsburg',
        county: 'Herkimer',
      },
      {
        state: 'New York',
        city: 'Upper Red Hook',
        county: 'Herkimer',
      },
      {
        state: 'New York',
        city: 'Walker Valley',
        county: 'Herkimer',
      },
      {
        state: 'New York',
        city: 'Watertown',
        county: 'Herkimer',
      },
      {
        state: 'New York',
        city: 'Woodbourne',
        county: 'Herkimer',
      },
      {
        state: 'New York',
        city: 'Yaphank',
        county: 'Herkimer',
      },
      {
        state: 'New York',
        city: 'Bliss',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Cedarhurst',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Hicksville',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Jamesport',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Nazareth College',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'North Bellport',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'North Gates',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'North Tonawanda',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Philmont',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Point Lookout',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Red Oaks Mill',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Rhinecliff',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Saddle Rock',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Sanborn',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Schenectady',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Sleepy Hollow Lake',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'South Lockport',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'South Nyack',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Spencerport',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Tivoli',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Utica',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Valatie',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Valley Falls',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Valley Stream',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Walworth',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Weedsport',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Wheatley Heights',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Williamsville',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Woodbury',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Woodridge',
        county: 'Jefferson',
      },
      {
        state: 'New York',
        city: 'Adams Center',
        county: 'Kings',
      },
      {
        state: 'New York',
        city: 'Rockville Centre',
        county: 'Lewis',
      },
      {
        state: 'New York',
        city: 'Shinnecock Hills',
        county: 'Lewis',
      },
      {
        state: 'New York',
        city: 'Silver Springs',
        county: 'Lewis',
      },
      {
        state: 'New York',
        city: 'Thendara',
        county: 'Lewis',
      },
      {
        state: 'New York',
        city: 'Tillson',
        county: 'Lewis',
      },
      {
        state: 'New York',
        city: 'Hammondsport',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'Mill Neck',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'Ridge',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'Sands Point',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'South Lima',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'Stewart Manor',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'Stony Brook',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'Village Green',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'Viola',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'Voorheesville',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'Wappingers Falls',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'Waterville',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'West Haverstraw',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'West Nyack',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'Weston Mills',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'White Lake',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'White Plains',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'Willsboro Point',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'Woodmere',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'Woodsburgh',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'Woodsville',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'Wyoming',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'Yorkville',
        county: 'Livingston',
      },
      {
        state: 'New York',
        city: 'Crugers',
        county: 'Madison',
      },
      {
        state: 'New York',
        city: 'Greenville',
        county: 'Madison',
      },
      {
        state: 'New York',
        city: 'Hampton Manor',
        county: 'Madison',
      },
      {
        state: 'New York',
        city: 'Mount Sinai',
        county: 'Madison',
      },
      {
        state: 'New York',
        city: 'Niverville',
        county: 'Madison',
      },
      {
        state: 'New York',
        city: 'Scottsburg',
        county: 'Madison',
      },
      {
        state: 'New York',
        city: 'South Ilion',
        county: 'Madison',
      },
      {
        state: 'New York',
        city: 'Albertson',
        county: 'Monroe',
      },
      {
        state: 'New York',
        city: 'Dobbs Ferry',
        county: 'Monroe',
      },
      {
        state: 'New York',
        city: 'Elwood',
        county: 'Monroe',
      },
      {
        state: 'New York',
        city: 'Forest Home',
        county: 'Monroe',
      },
      {
        state: 'New York',
        city: 'Freeville',
        county: 'Monroe',
      },
      {
        state: 'New York',
        city: 'Gananda',
        county: 'Monroe',
      },
      {
        state: 'New York',
        city: 'Gilgo',
        county: 'Monroe',
      },
      {
        state: 'New York',
        city: 'Hudson Falls',
        county: 'Monroe',
      },
      {
        state: 'New York',
        city: 'Laurel Hollow',
        county: 'Monroe',
      },
      {
        state: 'New York',
        city: 'Manorhaven',
        county: 'Monroe',
      },
      {
        state: 'New York',
        city: 'Merritt Park',
        county: 'Monroe',
      },
      {
        state: 'New York',
        city: 'Noyack',
        county: 'Monroe',
      },
      {
        state: 'New York',
        city: 'Orangeburg',
        county: 'Monroe',
      },
      {
        state: 'New York',
        city: 'Burdett',
        county: 'Montgomery',
      },
      {
        state: 'New York',
        city: 'Munsey Park',
        county: 'Montgomery',
      },
      {
        state: 'New York',
        city: 'Orient',
        county: 'Montgomery',
      },
      {
        state: 'New York',
        city: 'Port Dickinson',
        county: 'Montgomery',
      },
      {
        state: 'New York',
        city: 'Russell Gardens',
        county: 'Montgomery',
      },
      {
        state: 'New York',
        city: 'Rye Brook',
        county: 'Montgomery',
      },
      {
        state: 'New York',
        city: 'Salisbury Mills',
        county: 'Montgomery',
      },
      {
        state: 'New York',
        city: 'Shortsville',
        county: 'Montgomery',
      },
      {
        state: 'New York',
        city: 'Sleepy Hollow',
        county: 'Montgomery',
      },
      {
        state: 'New York',
        city: 'West Islip',
        county: 'Montgomery',
      },
      {
        state: 'New York',
        city: 'Armonk',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Au Sable Forks',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Averill Park',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Baldwin',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Baldwinsville',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Ballston Spa',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Bardonia',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Barryville',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Baxter Estates',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Bay Shore',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Bedford Hills',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Bellmore',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Black River',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Blasdell',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Blue Point',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Bohemia',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Brasher Falls',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Brentwood',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Brewster',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Brewster Heights',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Brewster Hill',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Brocton',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'The Bronx',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Brooktondale',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Buchanan',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Buffalo',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Cadyville',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Calverton',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Canastota',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Captree',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Carthage',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Cassadaga',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Cayuga',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Celoron',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Cementon',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Center Moriches',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Chaumont',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Chenango Bridge',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Chestertown',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Clintondale',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Cold Brook',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Coopers Plains',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Country Knolls',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Crown Heights',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Dalton',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Deferiet',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Dover Plains',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Eagle Bay',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'East Glenville',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'East Islip',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'East Moriches',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'East Randolph',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'East Worcester',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Eatons Neck',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Elmira',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Elmsford',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Endwell',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Farmingville',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Felts Mills',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Fillmore',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Fire Island',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Firthcliffe',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Fowlerville',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Garden city South',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Geneva',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Glasco',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Gowanda',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Great Neck Gardens',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Great River',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Greenwood Lake',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Groveland Station',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Hailesboro',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Harbor Hills',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Harbor Isle',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Hewlett Bay Park',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Hewlett Neck',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Highland',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Hilton',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Honeoye',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Huntington Station',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Irvington',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Jeffersonville',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Kaser',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Lake Erie Beach',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Lake Katrine',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Lake Mohegan',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Lakeland',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Lakeview',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Lakeville',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Latham',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Lido Beach',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Limestone',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Little Falls',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Lynbrook',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Margaretville',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Mechanicville',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Medina',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Millport',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Millwood',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Montour Falls',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Napeague',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Narrowsburg',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Nassau Lake',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'North Rose',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'North Valley Stream',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Northport',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Norwood',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Oceanside',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Olean',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Oneida',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Oxbow',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Oyster Bay Cove',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Parc',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Patchogue',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Pine Bush',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Pine Valley',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Plandome',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Poquott',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Port Byron',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Port Leyden',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Portlandville',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Rapids',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Rushville',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Saint John Fisher College',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Sharon Springs',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Shenorock',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Stony Brook University',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Sunset Bay',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'SUNY Oswego',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Tuckahoe',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Wassaic',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Akron',
        county: 'New York',
      },
      {
        state: 'New York',
        city: 'Atlantic Beach',
        county: 'Niagara',
      },
      {
        state: 'New York',
        city: 'Belle Terre',
        county: 'Niagara',
      },
      {
        state: 'New York',
        city: 'Brewerton',
        county: 'Niagara',
      },
      {
        state: 'New York',
        city: 'East Hills',
        county: 'Niagara',
      },
      {
        state: 'New York',
        city: 'Munnsville',
        county: 'Niagara',
      },
      {
        state: 'New York',
        city: 'Muttontown',
        county: 'Niagara',
      },
      {
        state: 'New York',
        city: 'North Lindenhurst',
        county: 'Niagara',
      },
      {
        state: 'New York',
        city: 'North New Hyde Park',
        county: 'Niagara',
      },
      {
        state: 'New York',
        city: 'Old Field',
        county: 'Niagara',
      },
      {
        state: 'New York',
        city: 'Peach Lake',
        county: 'Niagara',
      },
      {
        state: 'New York',
        city: 'Pearl River',
        county: 'Niagara',
      },
      {
        state: 'New York',
        city: 'Pelham Manor',
        county: 'Niagara',
      },
      {
        state: 'New York',
        city: 'Amityville',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Bayport',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Hunt',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Jefferson Valley-Yorktown',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'La Fargeville',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Lake Carmel',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Linwood',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Mechanicstown',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Montebello',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Montrose',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Nesconset',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'New Square',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Pamelia Center',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Plainview',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Ransomville',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Ronkonkoma',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Roslyn Harbor',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Roslyn Heights',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Saddle Rock Estates',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Taconic Shores',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Thomaston',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Troy',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Vails Gate',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Westford',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Westhampton Beach',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Witherbee',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Wurtsboro',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Altmar',
        county: 'Onondaga',
      },
      {
        state: 'New York',
        city: 'Cornwall-on-Hudson',
        county: 'Onondaga',
      },
      {
        state: 'New York',
        city: 'Cuylerville',
        county: 'Onondaga',
      },
      {
        state: 'New York',
        city: 'East Setauket',
        county: 'Onondaga',
      },
      {
        state: 'New York',
        city: 'Evans Mills',
        county: 'Onondaga',
      },
      {
        state: 'New York',
        city: 'Fayetteville',
        county: 'Onondaga',
      },
      {
        state: 'New York',
        city: 'Fishers Island',
        county: 'Onondaga',
      },
      {
        state: 'New York',
        city: 'Forestville',
        county: 'Onondaga',
      },
      {
        state: 'New York',
        city: 'Grand View-on-Hudson',
        county: 'Onondaga',
      },
      {
        state: 'New York',
        city: 'Halesite',
        county: 'Onondaga',
      },
      {
        state: 'New York',
        city: 'Hauppauge',
        county: 'Onondaga',
      },
      {
        state: 'New York',
        city: 'Hawthorne',
        county: 'Onondaga',
      },
      {
        state: 'New York',
        city: 'Hewlett',
        county: 'Onondaga',
      },
      {
        state: 'New York',
        city: 'Holbrook',
        county: 'Onondaga',
      },
      {
        state: 'New York',
        city: 'Huntington Bay',
        county: 'Onondaga',
      },
      {
        state: 'New York',
        city: 'Keuka Park',
        county: 'Onondaga',
      },
      {
        state: 'New York',
        city: 'Locust Valley',
        county: 'Onondaga',
      },
      {
        state: 'New York',
        city: 'Marist College',
        county: 'Onondaga',
      },
      {
        state: 'New York',
        city: 'Mastic Beach',
        county: 'Onondaga',
      },
      {
        state: 'New York',
        city: 'Monsey',
        county: 'Onondaga',
      },
      {
        state: 'New York',
        city: 'North Bellmore',
        county: 'Onondaga',
      },
      {
        state: 'New York',
        city: 'Cohoes',
        county: 'Ontario',
      },
      {
        state: 'New York',
        city: 'Minoa',
        county: 'Ontario',
      },
      {
        state: 'New York',
        city: 'Munsons Corners',
        county: 'Ontario',
      },
      {
        state: 'New York',
        city: 'North Lynbrook',
        county: 'Ontario',
      },
      {
        state: 'New York',
        city: 'Ravena',
        county: 'Ontario',
      },
      {
        state: 'New York',
        city: 'Saranac Lake',
        county: 'Ontario',
      },
      {
        state: 'New York',
        city: 'Scotchtown',
        county: 'Ontario',
      },
      {
        state: 'New York',
        city: 'Varna',
        county: 'Ontario',
      },
      {
        state: 'New York',
        city: 'Bay Park',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Bellerose',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Corfu',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Croton-on-Hudson',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Davenport Center',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'East Avon',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'East Rockaway',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Farnham',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Flower Hill',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Galeville',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Glens Falls North',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Heritage Hills',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'High Falls',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Holley',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Hornell',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Houghton',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Islandia',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Kauneonga Lake',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Kenmore',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Kiryas Joel',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Kysorville',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Lake Placid',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Lake Ronkonkoma',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'MacDonnell Heights',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Marcy',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Middleport',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Napanoch',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'New Hyde Park',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'North Amityville',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Phoenicia',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Round Lake',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Saltaire',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Trumansburg',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Fulton',
        county: 'Orleans',
      },
      {
        state: 'New York',
        city: 'Glen Park',
        county: 'Orleans',
      },
      {
        state: 'New York',
        city: 'Mineola',
        county: 'Orleans',
      },
      {
        state: 'New York',
        city: 'Richville',
        county: 'Orleans',
      },
      {
        state: 'New York',
        city: 'Carle Place',
        county: 'Oswego',
      },
      {
        state: 'New York',
        city: 'Copiague',
        county: 'Oswego',
      },
      {
        state: 'New York',
        city: 'Hoosick Falls',
        county: 'Oswego',
      },
      {
        state: 'New York',
        city: 'Lloyd Harbor',
        county: 'Oswego',
      },
      {
        state: 'New York',
        city: 'Mayville',
        county: 'Oswego',
      },
      {
        state: 'New York',
        city: 'Menands',
        county: 'Oswego',
      },
      {
        state: 'New York',
        city: 'Oswego',
        county: 'Oswego',
      },
      {
        state: 'New York',
        city: 'Radisson',
        county: 'Oswego',
      },
      {
        state: 'New York',
        city: 'Roessleville',
        county: 'Oswego',
      },
      {
        state: 'New York',
        city: 'University at Buffalo',
        county: 'Oswego',
      },
      {
        state: 'New York',
        city: 'Clifton Springs',
        county: 'Otsego',
      },
      {
        state: 'New York',
        city: 'Mattydale',
        county: 'Otsego',
      },
      {
        state: 'New York',
        city: 'Middletown',
        county: 'Otsego',
      },
      {
        state: 'New York',
        city: 'Oneida Castle',
        county: 'Otsego',
      },
      {
        state: 'New York',
        city: 'Smallwood',
        county: 'Otsego',
      },
      {
        state: 'New York',
        city: 'South Valley Stream',
        county: 'Otsego',
      },
      {
        state: 'New York',
        city: 'Star Lake',
        county: 'Otsego',
      },
      {
        state: 'New York',
        city: 'Town Line',
        county: 'Otsego',
      },
      {
        state: 'New York',
        city: 'Tuxedo Park',
        county: 'Otsego',
      },
      {
        state: 'New York',
        city: 'Wampsville',
        county: 'Otsego',
      },
      {
        state: 'New York',
        city: 'Water Mill',
        county: 'Otsego',
      },
      {
        state: 'New York',
        city: 'Websters Crossing',
        county: 'Otsego',
      },
      {
        state: 'New York',
        city: 'West Carthage',
        county: 'Otsego',
      },
      {
        state: 'New York',
        city: 'West Hempstead',
        county: 'Otsego',
      },
      {
        state: 'New York',
        city: 'West Hills',
        county: 'Otsego',
      },
      {
        state: 'New York',
        city: 'West Valley',
        county: 'Otsego',
      },
      {
        state: 'New York',
        city: 'Westhampton',
        county: 'Otsego',
      },
      {
        state: 'New York',
        city: 'Williston Park',
        county: 'Otsego',
      },
      {
        state: 'New York',
        city: 'Winthrop',
        county: 'Otsego',
      },
      {
        state: 'New York',
        city: 'East Hampton North',
        county: 'Putnam',
      },
      {
        state: 'New York',
        city: 'East Patchogue',
        county: 'Putnam',
      },
      {
        state: 'New York',
        city: 'Hobart',
        county: 'Putnam',
      },
      {
        state: 'New York',
        city: 'Lindenhurst',
        county: 'Putnam',
      },
      {
        state: 'New York',
        city: 'Lyncourt',
        county: 'Putnam',
      },
      {
        state: 'New York',
        city: 'Moriches',
        county: 'Putnam',
      },
      {
        state: 'New York',
        city: 'New Hackensack',
        county: 'Putnam',
      },
      {
        state: 'New York',
        city: 'Otisville',
        county: 'Putnam',
      },
      {
        state: 'New York',
        city: 'Sackets Harbor',
        county: 'Putnam',
      },
      {
        state: 'New York',
        city: 'Accord',
        county: 'Queens',
      },
      {
        state: 'New York',
        city: 'Airmont',
        county: 'Queens',
      },
      {
        state: 'New York',
        city: 'Asharoken',
        county: 'Rensselaer',
      },
      {
        state: 'New York',
        city: 'Dundee',
        county: 'Rensselaer',
      },
      {
        state: 'New York',
        city: 'Garrattsville',
        county: 'Rensselaer',
      },
      {
        state: 'New York',
        city: 'Interlaken',
        county: 'Rensselaer',
      },
      {
        state: 'New York',
        city: 'Jordan',
        county: 'Rensselaer',
      },
      {
        state: 'New York',
        city: 'Kerhonkson',
        county: 'Rensselaer',
      },
      {
        state: 'New York',
        city: 'Newark',
        county: 'Rensselaer',
      },
      {
        state: 'New York',
        city: 'North Hornell',
        county: 'Rensselaer',
      },
      {
        state: 'New York',
        city: 'Rocky Point',
        county: 'Rensselaer',
      },
      {
        state: 'New York',
        city: 'South Hill',
        county: 'Rensselaer',
      },
      {
        state: 'New York',
        city: 'Springfield Center',
        county: 'Rensselaer',
      },
      {
        state: 'New York',
        city: 'Alexandria Bay',
        county: 'Richmond',
      },
      {
        state: 'New York',
        city: 'Barnum Island',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Batavia',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Bemus Point',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Brinckerhoff',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Castorland',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Coram',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Crompond',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Danby',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Delevan',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Dolgeville',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'East Farmingdale',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'East Frankfort',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'East Norwich',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'East Rochester',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Elma Center',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Fairport',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Fairview',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Fort Johnson',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Glen Aubrey',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Glen Cove',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Glenwood Landing',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Hall',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Hankins',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Harrison',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Holland Patent',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Hudson',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Jefferson Heights',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Lacona',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Lattingtown',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Loudonville',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Malverne Park Oaks',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Northville',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Peekskill',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Watchtower',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Apalachin',
        county: 'Saratoga',
      },
      {
        state: 'New York',
        city: 'Gasport',
        county: 'Saratoga',
      },
      {
        state: 'New York',
        city: 'Gilbertsville',
        county: 'Saratoga',
      },
      {
        state: 'New York',
        city: 'Gordon Heights',
        county: 'Saratoga',
      },
      {
        state: 'New York',
        city: 'Hillside Lake',
        county: 'Saratoga',
      },
      {
        state: 'New York',
        city: 'Horseheads North',
        county: 'Saratoga',
      },
      {
        state: 'New York',
        city: 'Loch Sheldrake',
        county: 'Saratoga',
      },
      {
        state: 'New York',
        city: 'North Ballston Spa',
        county: 'Saratoga',
      },
      {
        state: 'New York',
        city: 'Northwest Harbor',
        county: 'Saratoga',
      },
      {
        state: 'New York',
        city: 'Putnam Lake',
        county: 'Saratoga',
      },
      {
        state: 'New York',
        city: 'Angola on the Lake',
        county: 'Schenectady',
      },
      {
        state: 'New York',
        city: 'Copake Lake',
        county: 'Schenectady',
      },
      {
        state: 'New York',
        city: 'Ellenville',
        county: 'Schenectady',
      },
      {
        state: 'New York',
        city: 'Sagaponack',
        county: 'Schenectady',
      },
      {
        state: 'New York',
        city: 'Unionville',
        county: 'Schenectady',
      },
      {
        state: 'New York',
        city: 'West Sand Lake',
        county: 'Schenectady',
      },
      {
        state: 'New York',
        city: 'Seaford',
        county: 'Schoharie',
      },
      {
        state: 'New York',
        city: 'Sloan',
        county: 'Schoharie',
      },
      {
        state: 'New York',
        city: 'West Hurley',
        county: 'Schoharie',
      },
      {
        state: 'New York',
        city: 'Wynantskill',
        county: 'Schoharie',
      },
      {
        state: 'New York',
        city: 'Mount Kisco',
        county: 'Schuyler',
      },
      {
        state: 'New York',
        city: 'Mountain Dale',
        county: 'Schuyler',
      },
      {
        state: 'New York',
        city: 'Silver Creek',
        county: 'Schuyler',
      },
      {
        state: 'New York',
        city: 'South Hempstead',
        county: 'Schuyler',
      },
      {
        state: 'New York',
        city: 'South Fallsburg',
        county: 'Seneca',
      },
      {
        state: 'New York',
        city: 'De Witt',
        county: 'St. Lawrence',
      },
      {
        state: 'New York',
        city: 'North Bay Shore',
        county: 'St. Lawrence',
      },
      {
        state: 'New York',
        city: 'Port Jefferson',
        county: 'St. Lawrence',
      },
      {
        state: 'New York',
        city: 'Riverside',
        county: 'St. Lawrence',
      },
      {
        state: 'New York',
        city: 'Rouses Point',
        county: 'St. Lawrence',
      },
      {
        state: 'New York',
        city: 'Ruby',
        county: 'St. Lawrence',
      },
      {
        state: 'New York',
        city: 'Scotia',
        county: 'St. Lawrence',
      },
      {
        state: 'New York',
        city: 'Tonawanda',
        county: 'St. Lawrence',
      },
      {
        state: 'New York',
        city: 'Valhalla',
        county: 'St. Lawrence',
      },
      {
        state: 'New York',
        city: 'West Winfield',
        county: 'St. Lawrence',
      },
      {
        state: 'New York',
        city: 'Westbury',
        county: 'St. Lawrence',
      },
      {
        state: 'New York',
        city: 'Crest View Heights',
        county: 'Steuben',
      },
      {
        state: 'New York',
        city: 'East Marion',
        county: 'Steuben',
      },
      {
        state: 'New York',
        city: 'Haines Falls',
        county: 'Steuben',
      },
      {
        state: 'New York',
        city: 'New York Mills',
        county: 'Steuben',
      },
      {
        state: 'New York',
        city: 'Peconic',
        county: 'Steuben',
      },
      {
        state: 'New York',
        city: 'Piffard',
        county: 'Steuben',
      },
      {
        state: 'New York',
        city: 'Plandome Heights',
        county: 'Steuben',
      },
      {
        state: 'New York',
        city: 'Rochester',
        county: 'Steuben',
      },
      {
        state: 'New York',
        city: 'Shelter Island Heights',
        county: 'Steuben',
      },
      {
        state: 'New York',
        city: 'St. Bonaventure',
        county: 'Steuben',
      },
      {
        state: 'New York',
        city: 'Aquebogue',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Auburn',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Baiting Hollow',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Balmville',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Bard College',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Barrytown',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Bayville',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Beacon',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Bellport',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Belmont',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Bethpage',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Billington Heights',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Binghamton University',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Blodgett Mills',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Bloomfield',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Bloomville',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Bolton Landing',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Breesport',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Briarcliff Manor',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Bridgeport',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Bridgeville',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Brockport',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Bronxville',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Brooklyn',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Brookville',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Brushton',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Burlington Flats',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Caroga Lake',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Castleton-on-Hudson',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Cattaraugus',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Cayuga Heights',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Centereach',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Central Bridge',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Chelsea Cove',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Churchville',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Claverack-Red Mills',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Cleveland',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Clifton Gardens',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Clifton Knolls-Mill Creek',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Clyde',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Cold Spring',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Cold Spring Harbor',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Commack',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Conesus Lake',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Copake Falls',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Corning',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Cortland',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Cortland West',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Cove Neck',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Cragsmoor',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Crystal Beach',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Cutchogue',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Depauville',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Dering Harbor',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Dexter',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Dix Hills',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Dunkirk',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'East Atlantic Beach',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'East Aurora',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'East Ithaca',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'East Meadow',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'East Nassau',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'East Northport',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'East Syracuse',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Eldred',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Elmira Heights',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Elmont',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Endicott',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Fairmount',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Fly Creek',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Fort Drum',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Franklin',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Fredonia',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Freeport',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Gang Mills',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Gardnertown',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Gloversville',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: "Golden's Bridge",
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Grandyle Village',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Great Bend',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Great Neck Estates',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Great Neck Plaza',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Greenport West',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Greigsville',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Hagaman',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Hannawa Falls',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Harriman',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Hartwick Seminary',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Head of the Harbor',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Hillcrest',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Holtsville',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Ilion',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Inwood',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Ithaca',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Jamestown',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Katonah',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Kensington',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Kiamesha Lake',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Kings Point',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Lincoln Park',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Livingston Manor',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Lyndonville',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Marlboro',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Matinecock',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Mattituck',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Melrose Park',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Melville',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Millerton',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Mineville',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Montauk',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Mount Ivy',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Nanuet',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Nedrow',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Nelliston',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'New Suffolk',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Nissequogue',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'North Bay',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'North Hills',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Norwich',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Oneonta',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Palatine Bridge',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Paul Smiths',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Pine Hill',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Plattsburgh',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Port Jefferson Station',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Port Jervis',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Poughkeepsie',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Quogue',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Remsenburg-Speonk',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Salamanca',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Salisbury',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Salt Point',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Sloatsburg',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'South Lansing',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Three Mile Bay',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Union Springs',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Verplanck',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Washington Mills',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Wellsburg',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'West Sayville',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Westernville',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Westmere',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Woodbury',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Wurtsboro Hills',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Yonkers',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Youngstown',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Fair Haven',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Leeds',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Miller Place',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'North Boston',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Nyack',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Orange Lake',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Piermont',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Richburg',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Rome',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Sayville',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Scotts Corners',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Slaterville Springs',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Sodus Point',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'South Edmeston',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'St. James',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Stone Ridge',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Swan Lake',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Tarrytown',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Thousand Island Park',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Upper Nyack',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Wading River',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Wadsworth',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Wainscott',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Wesley Hills',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'West Bay Shore',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'West Danby',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'West End',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Whitney Point',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Wingdale',
        county: 'Sullivan',
      },
      {
        state: 'New York',
        city: 'Haviland',
        county: 'Tioga',
      },
      {
        state: 'New York',
        city: 'Mahopac',
        county: 'Tioga',
      },
      {
        state: 'New York',
        city: 'McGraw',
        county: 'Tioga',
      },
      {
        state: 'New York',
        city: 'New Cassel',
        county: 'Tioga',
      },
      {
        state: 'New York',
        city: 'Baywood',
        county: 'Tompkins',
      },
      {
        state: 'New York',
        city: 'Falconer',
        county: 'Tompkins',
      },
      {
        state: 'New York',
        city: 'Hillburn',
        county: 'Tompkins',
      },
      {
        state: 'New York',
        city: 'Keeseville',
        county: 'Tompkins',
      },
      {
        state: 'New York',
        city: 'Manorville',
        county: 'Tompkins',
      },
      {
        state: 'New York',
        city: 'Middle Island',
        county: 'Tompkins',
      },
      {
        state: 'New York',
        city: 'New Hempstead',
        county: 'Tompkins',
      },
      {
        state: 'New York',
        city: 'Plessis',
        county: 'Tompkins',
      },
      {
        state: 'New York',
        city: 'Port Chester',
        county: 'Tompkins',
      },
      {
        state: 'New York',
        city: 'Roosevelt',
        county: 'Tompkins',
      },
      {
        state: 'New York',
        city: 'Sparkill',
        county: 'Tompkins',
      },
      {
        state: 'New York',
        city: 'Speculator',
        county: 'Tompkins',
      },
      {
        state: 'New York',
        city: 'Tannersville',
        county: 'Tompkins',
      },
      {
        state: 'New York',
        city: 'Unadilla Forks',
        county: 'Tompkins',
      },
      {
        state: 'New York',
        city: 'Valley Cottage',
        county: 'Tompkins',
      },
      {
        state: 'New York',
        city: 'West Chazy',
        county: 'Tompkins',
      },
      {
        state: 'New York',
        city: 'West Kill',
        county: 'Tompkins',
      },
      {
        state: 'New York',
        city: 'Bloomingburg',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Floral Park',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Heuvelton',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Honeoye Falls',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Hurleyville',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Lyon Mountain',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Malverne',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Manhasset',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Mastic',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Merrick',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Millbrook',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Mount Vision',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Natural Bridge',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Nelsonville',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'New York',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'North Haven',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Oakdale',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Pleasantville',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Port Gibson',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Retsof',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Richfield Springs',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Sea Cliff',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Siena College',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'South Corning',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Thornwood',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'University Gardens',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Upper Brookville',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Washingtonville',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'West Glens Falls',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Zena',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Ardsley',
        county: 'Warren',
      },
      {
        state: 'New York',
        city: 'Duane Lake',
        county: 'Warren',
      },
      {
        state: 'New York',
        city: 'Durhamville',
        county: 'Warren',
      },
      {
        state: 'New York',
        city: 'Seneca Knolls',
        county: 'Warren',
      },
      {
        state: 'New York',
        city: 'Shokan',
        county: 'Warren',
      },
      {
        state: 'New York',
        city: 'Suffern',
        county: 'Warren',
      },
      {
        state: 'New York',
        city: 'Westvale',
        county: 'Warren',
      },
      {
        state: 'New York',
        city: 'Eggertsville',
        county: 'Washington',
      },
      {
        state: 'New York',
        city: 'St. Regis Falls',
        county: 'Washington',
      },
      {
        state: 'New York',
        city: 'Earlville',
        county: 'Wayne',
      },
      {
        state: 'New York',
        city: 'Florida',
        county: 'Wayne',
      },
      {
        state: 'New York',
        city: 'Middleville',
        county: 'Wayne',
      },
      {
        state: 'New York',
        city: 'Plattsburgh West',
        county: 'Wayne',
      },
      {
        state: 'New York',
        city: 'Pottersville',
        county: 'Wayne',
      },
      {
        state: 'New York',
        city: 'Roslyn Estates',
        county: 'Wayne',
      },
      {
        state: 'New York',
        city: 'Round Top',
        county: 'Wayne',
      },
      {
        state: 'New York',
        city: 'Savona',
        county: 'Wayne',
      },
      {
        state: 'New York',
        city: 'Amagansett',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Amsterdam',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Angola',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Arlington',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Beaver Dam Lake',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Belleville',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Blauvelt',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Byersville',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Chestnut Ridge',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Constableville',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Copenhagen',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Cranberry Lake',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Dansville',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Depew',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Downsville',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'East Herkimer',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'East Kingston',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'East Williston',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Eastport',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Fallsburg',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Fishers Landing',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Flanders',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Fleischmanns',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Garden city',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Garden city Park',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Grahamsville',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Greenlawn',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Hampton Bays',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Hartsdale',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Hastings-on-Hudson',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Highland-on-the-Lake',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Islip Terrace',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Kennedy',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Kings Park',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Kingston',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Lake Grove',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Liverpool',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Mariaville Lake',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Massapequa',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Mongaup Valley',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Morrisonville',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Mount Vernon',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Niagara University',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'North Blenheim',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'North Massapequa',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Pomona',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Roslyn',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Solvay',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Red Creek',
        county: 'Wyoming',
      },
      {
        state: 'New York',
        city: 'Sound Beach',
        county: 'Wyoming',
      },
      {
        state: 'New York',
        city: 'Spring Valley',
        county: 'Wyoming',
      },
      {
        state: 'New York',
        city: 'Syosset',
        county: 'Wyoming',
      },
      {
        state: 'New York',
        city: 'Glens Falls',
        county: 'Yates',
      },
      {
        state: 'New York',
        city: 'McLean',
        county: 'Yates',
      },
      {
        state: 'New York',
        city: 'Panama',
        county: 'Yates',
      },
      {
        state: 'New York',
        city: 'Sherrill',
        county: 'Yates',
      },
      {
        state: 'New York',
        city: 'Pound Ridge',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Monroe',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Le Roy',
        county: 'Monroe',
      },
      {
        state: 'New York',
        city: 'Cross River',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'South Salem',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Ancramdale',
        county: 'Columbia',
      },
      {
        state: 'New York',
        city: 'Rye',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Patterson',
        county: 'Putnam',
      },
      {
        state: 'New York',
        city: 'Putnam Valley',
        county: 'Putnam',
      },
      {
        state: 'New York',
        city: 'Granville',
        county: 'Washington',
      },
      {
        state: 'New York',
        city: 'South Salem',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Cortlandt Manor',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Warwick',
        county: 'Orange',
      },
      {
        state: 'New York',
        city: 'Salina',
        county: 'Onondaga',
      },
      {
        state: 'New York',
        city: 'Philipstown',
        county: 'Putnam',
      },
      {
        state: 'New York',
        city: 'Saugerties',
        county: 'Ulster',
      },
      {
        state: 'New York',
        city: 'Smithtown',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Carmel Hamlet',
        county: 'Putnam',
      },
      {
        state: 'New York',
        city: 'Mamaroneck',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Somers',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Ossining',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Jefferson Valley',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Pawling',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Rhinebeck',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Village of Pelham',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'East Hampton',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Carmel',
        county: 'Putnam',
      },
      {
        state: 'New York',
        city: 'Hunter',
        county: 'Greene',
      },
      {
        state: 'New York',
        city: 'Verona',
        county: 'Oneida',
      },
      {
        state: 'New York',
        city: 'Haverstraw',
        county: 'Rockland',
      },
      {
        state: 'New York',
        city: 'Amenia',
        county: 'Dutchess',
      },
      {
        state: 'New York',
        city: 'Mohegan Lake',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Bronx',
        county: 'Nassau',
      },
      {
        state: 'New York',
        city: 'Cortlandt',
        county: 'Westchester',
      },
      {
        state: 'New York',
        city: 'Salem',
        county: 'Washington',
      },
      {
        state: 'New York',
        city: 'Riverhead',
        county: 'Suffolk',
      },
      {
        state: 'New York',
        city: 'Malone',
        county: 'Franklin',
      },
      {
        state: 'New York',
        city: 'Athens',
        county: 'Greene',
      },
      {
        state: 'New York',
        city: 'Waccabuc',
        county: 'Westchester',
      },
      {
        state: '',
        city: '',
        county: '',
      },
      {
        state: 'Texas',
        city: 'Palestine',
        county: 'Anderson',
      },
      {
        state: 'Texas',
        city: 'Elkhart',
        county: 'Anderson',
      },
      {
        state: 'Texas',
        city: 'Frankston',
        county: 'Anderson',
      },
      {
        state: 'Texas',
        city: 'Neches',
        county: 'Anderson',
      },
      {
        state: 'Texas',
        city: 'Andrews',
        county: 'Andrews',
      },
      {
        state: 'Texas',
        city: 'McKinney Acres',
        county: 'Andrews',
      },
      {
        state: 'Texas',
        city: 'Lufkin',
        county: 'Angelina',
      },
      {
        state: 'Texas',
        city: 'Hudson',
        county: 'Angelina',
      },
      {
        state: 'Texas',
        city: 'Diboll',
        county: 'Angelina',
      },
      {
        state: 'Texas',
        city: 'Huntington',
        county: 'Angelina',
      },
      {
        state: 'Texas',
        city: 'Redland',
        county: 'Angelina',
      },
      {
        state: 'Texas',
        city: 'Zavalla',
        county: 'Angelina',
      },
      {
        state: 'Texas',
        city: 'Burke',
        county: 'Angelina',
      },
      {
        state: 'Texas',
        city: 'Rockport',
        county: 'Aransas',
      },
      {
        state: 'Texas',
        city: 'Fulton',
        county: 'Aransas',
      },
      {
        state: 'Texas',
        city: 'Lamar',
        county: 'Aransas',
      },
      {
        state: 'Texas',
        city: 'Holiday Beach',
        county: 'Aransas',
      },
      {
        state: 'Texas',
        city: 'Archer city',
        county: 'Archer',
      },
      {
        state: 'Texas',
        city: 'Holliday',
        county: 'Archer',
      },
      {
        state: 'Texas',
        city: 'Lakeside city',
        county: 'Archer',
      },
      {
        state: 'Texas',
        city: 'Scotland',
        county: 'Archer',
      },
      {
        state: 'Texas',
        city: 'Windthorst',
        county: 'Archer',
      },
      {
        state: 'Texas',
        city: 'Megargel',
        county: 'Archer',
      },
      {
        state: 'Texas',
        city: 'Claude',
        county: 'Armstrong',
      },
      {
        state: 'Texas',
        city: 'Washburn',
        county: 'Armstrong',
      },
      {
        state: 'Texas',
        city: 'Pleasanton',
        county: 'Atascosa',
      },
      {
        state: 'Texas',
        city: 'Jourdanton',
        county: 'Atascosa',
      },
      {
        state: 'Texas',
        city: 'Poteet',
        county: 'Atascosa',
      },
      {
        state: 'Texas',
        city: 'Lytle',
        county: 'Atascosa',
      },
      {
        state: 'Texas',
        city: 'Charlotte',
        county: 'Atascosa',
      },
      {
        state: 'Texas',
        city: 'Leming',
        county: 'Atascosa',
      },
      {
        state: 'Texas',
        city: 'Christine',
        county: 'Atascosa',
      },
      {
        state: 'Texas',
        city: 'Sealy',
        county: 'Austin',
      },
      {
        state: 'Texas',
        city: 'Bellville',
        county: 'Austin',
      },
      {
        state: 'Texas',
        city: 'Wallis',
        county: 'Austin',
      },
      {
        state: 'Texas',
        city: 'San Felipe',
        county: 'Austin',
      },
      {
        state: 'Texas',
        city: 'Brazos Country',
        county: 'Austin',
      },
      {
        state: 'Texas',
        city: 'New Ulm',
        county: 'Austin',
      },
      {
        state: 'Texas',
        city: 'Industry',
        county: 'Austin',
      },
      {
        state: 'Texas',
        city: 'South Frydek',
        county: 'Austin',
      },
      {
        state: 'Texas',
        city: 'Muleshoe',
        county: 'Bailey',
      },
      {
        state: 'Texas',
        city: 'Lakehills',
        county: 'Bandera',
      },
      {
        state: 'Texas',
        city: 'Lake Medina Shores',
        county: 'Bandera',
      },
      {
        state: 'Texas',
        city: 'Bandera',
        county: 'Bandera',
      },
      {
        state: 'Texas',
        city: 'Bastrop',
        county: 'Bastrop',
      },
      {
        state: 'Texas',
        city: 'Elgin',
        county: 'Bastrop',
      },
      {
        state: 'Texas',
        city: 'Camp Swift',
        county: 'Bastrop',
      },
      {
        state: 'Texas',
        city: 'Cedar Creek',
        county: 'Bastrop',
      },
      {
        state: 'Texas',
        city: 'Smithville',
        county: 'Bastrop',
      },
      {
        state: 'Texas',
        city: 'Wyldwood',
        county: 'Bastrop',
      },
      {
        state: 'Texas',
        city: 'Circle D-KC Estates',
        county: 'Bastrop',
      },
      {
        state: 'Texas',
        city: 'Rosanky',
        county: 'Bastrop',
      },
      {
        state: 'Texas',
        city: 'McDade',
        county: 'Bastrop',
      },
      {
        state: 'Texas',
        city: 'Red Rock',
        county: 'Bastrop',
      },
      {
        state: 'Texas',
        city: 'Paige',
        county: 'Bastrop',
      },
      {
        state: 'Texas',
        city: 'Seymour',
        county: 'Baylor',
      },
      {
        state: 'Texas',
        city: 'Beeville',
        county: 'Bee',
      },
      {
        state: 'Texas',
        city: 'Skidmore',
        county: 'Bee',
      },
      {
        state: 'Texas',
        city: 'Blue Berry Hill',
        county: 'Bee',
      },
      {
        state: 'Texas',
        city: 'Pettus',
        county: 'Bee',
      },
      {
        state: 'Texas',
        city: 'Tuleta',
        county: 'Bee',
      },
      {
        state: 'Texas',
        city: 'Tynan',
        county: 'Bee',
      },
      {
        state: 'Texas',
        city: 'Pawnee',
        county: 'Bee',
      },
      {
        state: 'Texas',
        city: 'Normanna',
        county: 'Bee',
      },
      {
        state: 'Texas',
        city: 'Tulsita',
        county: 'Bee',
      },
      {
        state: 'Texas',
        city: 'Killeen',
        county: 'Bell',
      },
      {
        state: 'Texas',
        city: 'Temple',
        county: 'Bell',
      },
      {
        state: 'Texas',
        city: 'Harker Heights',
        county: 'Bell',
      },
      {
        state: 'Texas',
        city: 'Belton',
        county: 'Bell',
      },
      {
        state: 'Texas',
        city: 'Nolanville',
        county: 'Bell',
      },
      {
        state: 'Texas',
        city: "Morgan's Point Resort",
        county: 'Bell',
      },
      {
        state: 'Texas',
        city: 'Troy',
        county: 'Bell',
      },
      {
        state: 'Texas',
        city: 'Salado',
        county: 'Bell',
      },
      {
        state: 'Texas',
        city: 'Little River-Academy',
        county: 'Bell',
      },
      {
        state: 'Texas',
        city: 'Rogers',
        county: 'Bell',
      },
      {
        state: 'Texas',
        city: 'Holland',
        county: 'Bell',
      },
      {
        state: 'Texas',
        city: 'Pendleton',
        county: 'Bell',
      },
      {
        state: 'Texas',
        city: 'San Antonio',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Schertz',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Timberwood Park',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Converse',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Universal city',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Live Oak',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Leon Valley',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Selma',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Fair Oaks Ranch',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Scenic Oaks',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Helotes',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Kirby',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Lackland AFB',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Alamo Heights',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Windcrest',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Terrell Hills',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Sandy Oaks',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Cross Mountain',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Castle Hills',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Shavano Park',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Hollywood Park',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Balcones Heights',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Olmos Park',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Elmendorf',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Somerset',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'St. Hedwig',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Randolph AFB',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'China Grove',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Von Ormy',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Hill Country Village',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Grey Forest',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Macdona',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Blanco',
        county: 'Blanco',
      },
      {
        state: 'Texas',
        city: 'Johnson city',
        county: 'Blanco',
      },
      {
        state: 'Texas',
        city: 'Round Mountain',
        county: 'Blanco',
      },
      {
        state: 'Texas',
        city: 'Gail',
        county: 'Borden',
      },
      {
        state: 'Texas',
        city: 'Clifton',
        county: 'Bosque',
      },
      {
        state: 'Texas',
        city: 'Meridian',
        county: 'Bosque',
      },
      {
        state: 'Texas',
        city: 'Laguna Park',
        county: 'Bosque',
      },
      {
        state: 'Texas',
        city: 'Valley Mills',
        county: 'Bosque',
      },
      {
        state: 'Texas',
        city: 'Walnut Springs',
        county: 'Bosque',
      },
      {
        state: 'Texas',
        city: 'Morgan',
        county: 'Bosque',
      },
      {
        state: 'Texas',
        city: 'Iredell',
        county: 'Bosque',
      },
      {
        state: 'Texas',
        city: 'Cranfills Gap',
        county: 'Bosque',
      },
      {
        state: 'Texas',
        city: 'Kopperl',
        county: 'Bosque',
      },
      {
        state: 'Texas',
        city: 'Mosheim',
        county: 'Bosque',
      },
      {
        state: 'Texas',
        city: 'Texarkana',
        county: 'Bowie',
      },
      {
        state: 'Texas',
        city: 'Wake Village',
        county: 'Bowie',
      },
      {
        state: 'Texas',
        city: 'New Boston',
        county: 'Bowie',
      },
      {
        state: 'Texas',
        city: 'Nash',
        county: 'Bowie',
      },
      {
        state: 'Texas',
        city: 'Hooks',
        county: 'Bowie',
      },
      {
        state: 'Texas',
        city: 'De Kalb',
        county: 'Bowie',
      },
      {
        state: 'Texas',
        city: 'Red Lick',
        county: 'Bowie',
      },
      {
        state: 'Texas',
        city: 'Maud',
        county: 'Bowie',
      },
      {
        state: 'Texas',
        city: 'Redwater',
        county: 'Bowie',
      },
      {
        state: 'Texas',
        city: 'Leary',
        county: 'Bowie',
      },
      {
        state: 'Texas',
        city: 'Pearland',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Lake Jackson',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Alvin',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Angleton',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Freeport',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Clute',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Manvel',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Iowa Colony',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Richwood',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'West Columbia',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Sweeny',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Brazoria',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Jones Creek',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Wild Peach Village',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Rosharon',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Danbury',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Brookside Village',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Oyster Creek',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Holiday Lakes',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Hillcrest',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Surfside Beach',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: "Bailey's Prairie",
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Liverpool',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Bonney',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Sandy Point',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'East Columbia',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Damon',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'Quintana',
        county: 'Brazoria',
      },
      {
        state: 'Texas',
        city: 'College Station',
        county: 'Brazos',
      },
      {
        state: 'Texas',
        city: 'Bryan',
        county: 'Brazos',
      },
      {
        state: 'Texas',
        city: 'Lake Bryan',
        county: 'Brazos',
      },
      {
        state: 'Texas',
        city: 'Kurten',
        county: 'Brazos',
      },
      {
        state: 'Texas',
        city: 'Wixon Valley',
        county: 'Brazos',
      },
      {
        state: 'Texas',
        city: 'Alpine',
        county: 'Brewster',
      },
      {
        state: 'Texas',
        city: 'Marathon',
        county: 'Brewster',
      },
      {
        state: 'Texas',
        city: 'Study Butte',
        county: 'Brewster',
      },
      {
        state: 'Texas',
        city: 'Terlingua',
        county: 'Brewster',
      },
      {
        state: 'Texas',
        city: 'Silverton',
        county: 'Briscoe',
      },
      {
        state: 'Texas',
        city: 'Quitaque',
        county: 'Briscoe',
      },
      {
        state: 'Texas',
        city: 'Falfurrias',
        county: 'Brooks',
      },
      {
        state: 'Texas',
        city: 'Airport Road Addition',
        county: 'Brooks',
      },
      {
        state: 'Texas',
        city: 'Encino',
        county: 'Brooks',
      },
      {
        state: 'Texas',
        city: 'Flowella',
        county: 'Brooks',
      },
      {
        state: 'Texas',
        city: 'Cantu Addition',
        county: 'Brooks',
      },
      {
        state: 'Texas',
        city: 'Brownwood',
        county: 'Brown',
      },
      {
        state: 'Texas',
        city: 'Early',
        county: 'Brown',
      },
      {
        state: 'Texas',
        city: 'Bangs',
        county: 'Brown',
      },
      {
        state: 'Texas',
        city: 'Lake Brownwood',
        county: 'Brown',
      },
      {
        state: 'Texas',
        city: 'Thunderbird Bay',
        county: 'Brown',
      },
      {
        state: 'Texas',
        city: 'Blanket',
        county: 'Brown',
      },
      {
        state: 'Texas',
        city: 'May',
        county: 'Brown',
      },
      {
        state: 'Texas',
        city: 'Zephyr',
        county: 'Brown',
      },
      {
        state: 'Texas',
        city: 'Caldwell',
        county: 'Burleson',
      },
      {
        state: 'Texas',
        city: 'Somerville',
        county: 'Burleson',
      },
      {
        state: 'Texas',
        city: 'Beaver Creek',
        county: 'Burleson',
      },
      {
        state: 'Texas',
        city: 'Snook',
        county: 'Burleson',
      },
      {
        state: 'Texas',
        city: 'Lyons',
        county: 'Burleson',
      },
      {
        state: 'Texas',
        city: 'Cade Lakes',
        county: 'Burleson',
      },
      {
        state: 'Texas',
        city: 'Tunis',
        county: 'Burleson',
      },
      {
        state: 'Texas',
        city: 'Clay',
        county: 'Burleson',
      },
      {
        state: 'Texas',
        city: 'Deanville',
        county: 'Burleson',
      },
      {
        state: 'Texas',
        city: 'Marble Falls',
        county: 'Burnet',
      },
      {
        state: 'Texas',
        city: 'Burnet',
        county: 'Burnet',
      },
      {
        state: 'Texas',
        city: 'Granite Shoals',
        county: 'Burnet',
      },
      {
        state: 'Texas',
        city: 'Meadowlakes',
        county: 'Burnet',
      },
      {
        state: 'Texas',
        city: 'Bertram',
        county: 'Burnet',
      },
      {
        state: 'Texas',
        city: 'Cottonwood Shores',
        county: 'Burnet',
      },
      {
        state: 'Texas',
        city: 'Highland Haven',
        county: 'Burnet',
      },
      {
        state: 'Texas',
        city: 'Briggs',
        county: 'Burnet',
      },
      {
        state: 'Texas',
        city: 'Lockhart',
        county: 'Caldwell',
      },
      {
        state: 'Texas',
        city: 'Luling',
        county: 'Caldwell',
      },
      {
        state: 'Texas',
        city: 'Martindale',
        county: 'Caldwell',
      },
      {
        state: 'Texas',
        city: 'Port Lavaca',
        county: 'Calhoun',
      },
      {
        state: 'Texas',
        city: 'Seadrift',
        county: 'Calhoun',
      },
      {
        state: 'Texas',
        city: "Port O'Connor",
        county: 'Calhoun',
      },
      {
        state: 'Texas',
        city: 'Point Comfort',
        county: 'Calhoun',
      },
      {
        state: 'Texas',
        city: 'Alamo Beach',
        county: 'Calhoun',
      },
      {
        state: 'Texas',
        city: 'Magnolia Beach',
        county: 'Calhoun',
      },
      {
        state: 'Texas',
        city: 'Clyde',
        county: 'Callahan',
      },
      {
        state: 'Texas',
        city: 'Baird',
        county: 'Callahan',
      },
      {
        state: 'Texas',
        city: 'Cross Plains',
        county: 'Callahan',
      },
      {
        state: 'Texas',
        city: 'Putnam',
        county: 'Callahan',
      },
      {
        state: 'Texas',
        city: 'Brownsville',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Harlingen',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'San Benito',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Los Fresnos',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'La Feria',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Cameron Park',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Port Isabel',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Primera',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Laureles',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Laguna Vista',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'La Paloma',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Combes',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Santa Rosa',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Rancho Viejo',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'South Padre Island',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Rio Hondo',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Juarez',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Palm Valley',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Laguna Heights',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Palmer',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Encantada-Ranchito-El Calaboz',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Indian Lake',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Las Palmas II',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Arroyo Colorado Estates',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'South Point',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Rice Tracts',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Olmito',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Solis',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'La Tina Ranch',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Los Indios',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Reid Hope King',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Santa Maria',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Bayview',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Orason',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Bluetown',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Villa del Sol',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Bixby',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Villa Pancho',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Green Valley Farms',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'La Feria North',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Chula Vista',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'San Pedro',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Arroyo Gardens',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Rangerville',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Iglesia Antigua',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Ratamosa',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Lago',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Lasana',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Del Mar Heights',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Yznaga',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Tierra Bonita',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Lozano',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'El Camino Angosto',
        county: 'Cameron',
      },
      {
        state: 'Texas',
        city: 'Pittsburg',
        county: 'Camp',
      },
      {
        state: 'Texas',
        city: 'Rocky Mound',
        county: 'Camp',
      },
      {
        state: 'Texas',
        city: 'Panhandle',
        county: 'Carson',
      },
      {
        state: 'Texas',
        city: 'White Deer',
        county: 'Carson',
      },
      {
        state: 'Texas',
        city: 'Groom',
        county: 'Carson',
      },
      {
        state: 'Texas',
        city: 'Skellytown',
        county: 'Carson',
      },
      {
        state: 'Texas',
        city: 'Atlanta',
        county: 'Cass',
      },
      {
        state: 'Texas',
        city: 'Linden',
        county: 'Cass',
      },
      {
        state: 'Texas',
        city: 'Hughes Springs',
        county: 'Cass',
      },
      {
        state: 'Texas',
        city: 'Queen city',
        county: 'Cass',
      },
      {
        state: 'Texas',
        city: 'Douglassville',
        county: 'Cass',
      },
      {
        state: 'Texas',
        city: 'Bloomburg',
        county: 'Cass',
      },
      {
        state: 'Texas',
        city: 'McLeod',
        county: 'Cass',
      },
      {
        state: 'Texas',
        city: 'Avinger',
        county: 'Cass',
      },
      {
        state: 'Texas',
        city: 'Bivins',
        county: 'Cass',
      },
      {
        state: 'Texas',
        city: 'Marietta',
        county: 'Cass',
      },
      {
        state: 'Texas',
        city: 'Domino',
        county: 'Cass',
      },
      {
        state: 'Texas',
        city: 'Dimmitt',
        county: 'Castro',
      },
      {
        state: 'Texas',
        city: 'Hart',
        county: 'Castro',
      },
      {
        state: 'Texas',
        city: 'Nazareth',
        county: 'Castro',
      },
      {
        state: 'Texas',
        city: 'Summerfield',
        county: 'Castro',
      },
      {
        state: 'Texas',
        city: 'Mont Belvieu',
        county: 'Chambers',
      },
      {
        state: 'Texas',
        city: 'Beach city',
        county: 'Chambers',
      },
      {
        state: 'Texas',
        city: 'Winnie',
        county: 'Chambers',
      },
      {
        state: 'Texas',
        city: 'Anahuac',
        county: 'Chambers',
      },
      {
        state: 'Texas',
        city: 'Stowell',
        county: 'Chambers',
      },
      {
        state: 'Texas',
        city: 'Old River-Winfree',
        county: 'Chambers',
      },
      {
        state: 'Texas',
        city: 'Cove',
        county: 'Chambers',
      },
      {
        state: 'Texas',
        city: 'Oak Island',
        county: 'Chambers',
      },
      {
        state: 'Texas',
        city: 'Jacksonville',
        county: 'Cherokee',
      },
      {
        state: 'Texas',
        city: 'Rusk',
        county: 'Cherokee',
      },
      {
        state: 'Texas',
        city: 'Shadybrook',
        county: 'Cherokee',
      },
      {
        state: 'Texas',
        city: 'Alto',
        county: 'Cherokee',
      },
      {
        state: 'Texas',
        city: 'Wells',
        county: 'Cherokee',
      },
      {
        state: 'Texas',
        city: 'New Summerfield',
        county: 'Cherokee',
      },
      {
        state: 'Texas',
        city: 'Gallatin',
        county: 'Cherokee',
      },
      {
        state: 'Texas',
        city: 'Cuney',
        county: 'Cherokee',
      },
      {
        state: 'Texas',
        city: 'Childress',
        county: 'Childress',
      },
      {
        state: 'Texas',
        city: 'Henrietta',
        county: 'Clay',
      },
      {
        state: 'Texas',
        city: 'Dean',
        county: 'Clay',
      },
      {
        state: 'Texas',
        city: 'Bellevue',
        county: 'Clay',
      },
      {
        state: 'Texas',
        city: 'Petrolia',
        county: 'Clay',
      },
      {
        state: 'Texas',
        city: 'Byers',
        county: 'Clay',
      },
      {
        state: 'Texas',
        city: 'Jolly',
        county: 'Clay',
      },
      {
        state: 'Texas',
        city: 'Morton',
        county: 'Cochran',
      },
      {
        state: 'Texas',
        city: 'Whiteface',
        county: 'Cochran',
      },
      {
        state: 'Texas',
        city: 'Bledsoe',
        county: 'Cochran',
      },
      {
        state: 'Texas',
        city: 'Bronte',
        county: 'Coke',
      },
      {
        state: 'Texas',
        city: 'Robert Lee',
        county: 'Coke',
      },
      {
        state: 'Texas',
        city: 'Coleman',
        county: 'Coleman',
      },
      {
        state: 'Texas',
        city: 'Santa Anna',
        county: 'Coleman',
      },
      {
        state: 'Texas',
        city: 'Novice',
        county: 'Coleman',
      },
      {
        state: 'Texas',
        city: 'Valera',
        county: 'Coleman',
      },
      {
        state: 'Texas',
        city: 'Plano',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'McKinney',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Frisco',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Allen',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Wylie',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Prosper',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Murphy',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Anna',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Princeton',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Celina',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Melissa',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Fairview',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Lucas',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Parker',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Lavon',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Farmersville',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Josephine',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Lowry Crossing',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Nevada',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Seis Lagos',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Blue Ridge',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'St. Paul',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Westminster',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'New Hope',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Weston',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Wellington',
        county: 'Collingsworth',
      },
      {
        state: 'Texas',
        city: 'Dodson',
        county: 'Collingsworth',
      },
      {
        state: 'Texas',
        city: 'Samnorwood',
        county: 'Collingsworth',
      },
      {
        state: 'Texas',
        city: 'Quail',
        county: 'Collingsworth',
      },
      {
        state: 'Texas',
        city: 'Columbus',
        county: 'Colorado',
      },
      {
        state: 'Texas',
        city: 'Eagle Lake',
        county: 'Colorado',
      },
      {
        state: 'Texas',
        city: 'Weimar',
        county: 'Colorado',
      },
      {
        state: 'Texas',
        city: 'Glidden',
        county: 'Colorado',
      },
      {
        state: 'Texas',
        city: 'Rock Island',
        county: 'Colorado',
      },
      {
        state: 'Texas',
        city: 'Garwood',
        county: 'Colorado',
      },
      {
        state: 'Texas',
        city: 'Sheridan',
        county: 'Colorado',
      },
      {
        state: 'Texas',
        city: 'Nada',
        county: 'Colorado',
      },
      {
        state: 'Texas',
        city: 'New Braunfels',
        county: 'Comal',
      },
      {
        state: 'Texas',
        city: 'Canyon Lake',
        county: 'Comal',
      },
      {
        state: 'Texas',
        city: 'Bulverde',
        county: 'Comal',
      },
      {
        state: 'Texas',
        city: 'Garden Ridge',
        county: 'Comal',
      },
      {
        state: 'Texas',
        city: 'Spring Branch',
        county: 'Comal',
      },
      {
        state: 'Texas',
        city: 'Comanche',
        county: 'Comanche',
      },
      {
        state: 'Texas',
        city: 'De Leon',
        county: 'Comanche',
      },
      {
        state: 'Texas',
        city: 'Gustine',
        county: 'Comanche',
      },
      {
        state: 'Texas',
        city: 'Proctor',
        county: 'Comanche',
      },
      {
        state: 'Texas',
        city: 'Lamkin',
        county: 'Comanche',
      },
      {
        state: 'Texas',
        city: 'Eden',
        county: 'Concho',
      },
      {
        state: 'Texas',
        city: 'Paint Rock',
        county: 'Concho',
      },
      {
        state: 'Texas',
        city: 'Gainesville',
        county: 'Cooke',
      },
      {
        state: 'Texas',
        city: 'Lake Kiowa',
        county: 'Cooke',
      },
      {
        state: 'Texas',
        city: 'Lindsay',
        county: 'Cooke',
      },
      {
        state: 'Texas',
        city: 'Muenster',
        county: 'Cooke',
      },
      {
        state: 'Texas',
        city: 'Valley View',
        county: 'Cooke',
      },
      {
        state: 'Texas',
        city: 'Road Runner',
        county: 'Cooke',
      },
      {
        state: 'Texas',
        city: 'Myra',
        county: 'Cooke',
      },
      {
        state: 'Texas',
        city: 'Callisburg',
        county: 'Cooke',
      },
      {
        state: 'Texas',
        city: 'Copperas Cove',
        county: 'Coryell',
      },
      {
        state: 'Texas',
        city: 'Fort Hood',
        county: 'Coryell',
      },
      {
        state: 'Texas',
        city: 'Gatesville',
        county: 'Coryell',
      },
      {
        state: 'Texas',
        city: 'Flat',
        county: 'Coryell',
      },
      {
        state: 'Texas',
        city: 'Oglesby',
        county: 'Coryell',
      },
      {
        state: 'Texas',
        city: 'Evant',
        county: 'Coryell',
      },
      {
        state: 'Texas',
        city: 'South Mountain',
        county: 'Coryell',
      },
      {
        state: 'Texas',
        city: 'Mound',
        county: 'Coryell',
      },
      {
        state: 'Texas',
        city: 'Paducah',
        county: 'Cottle',
      },
      {
        state: 'Texas',
        city: 'Crane',
        county: 'Crane',
      },
      {
        state: 'Texas',
        city: 'Ozona',
        county: 'Crockett',
      },
      {
        state: 'Texas',
        city: 'Ralls',
        county: 'Crosby',
      },
      {
        state: 'Texas',
        city: 'Crosbyton',
        county: 'Crosby',
      },
      {
        state: 'Texas',
        city: 'Lorenzo',
        county: 'Crosby',
      },
      {
        state: 'Texas',
        city: 'Van Horn',
        county: 'Culberson',
      },
      {
        state: 'Texas',
        city: 'Dalhart',
        county: 'Dallam',
      },
      {
        state: 'Texas',
        city: 'Texline',
        county: 'Dallam',
      },
      {
        state: 'Texas',
        city: 'Dallas',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Irving',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Garland',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Grand Prairie',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Mesquite',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Carrollton',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Richardson',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Rowlett',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'DeSoto',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Cedar Hill',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Coppell',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Lancaster',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Duncanville',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Farmers Branch',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Balch Springs',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Sachse',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'University Park',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Seagoville',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Addison',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Glenn Heights',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Highland Park',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Sunnyvale',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Hutchins',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Wilmer',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Cockrell Hill',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Bear Creek Ranch',
        county: 'Dallas',
      },
      {
        state: 'Texas',
        city: 'Lamesa',
        county: 'Dawson',
      },
      {
        state: 'Texas',
        city: 'Welch',
        county: 'Dawson',
      },
      {
        state: 'Texas',
        city: 'Los Ybanez',
        county: 'Dawson',
      },
      {
        state: 'Texas',
        city: 'Hereford',
        county: 'Deaf Smith',
      },
      {
        state: 'Texas',
        city: 'Cooper',
        county: 'Delta',
      },
      {
        state: 'Texas',
        city: 'Pecan Gap',
        county: 'Delta',
      },
      {
        state: 'Texas',
        city: 'Denton',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Lewisville',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Flower Mound',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Little Elm',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'The Colony',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Corinth',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Highland Village',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Trophy Club',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Lantana',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Roanoke',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Sanger',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Paloma Creek South',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Lake Dallas',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Providence Village',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Savannah',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Krum',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Northlake',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Aubrey',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Hickory Creek',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Oak Point',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Justin',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Pilot Point',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Argyle',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Paloma Creek',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Double Oak',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Shady Shores',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Hackberry',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Ponder',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Copper Canyon',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Krugerville',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Bartonville',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Cross Roads',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Lakewood Village',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'DISH',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Hebron',
        county: 'Denton',
      },
      {
        state: 'Texas',
        city: 'Cuero',
        county: 'DeWitt',
      },
      {
        state: 'Texas',
        city: 'Yorktown',
        county: 'DeWitt',
      },
      {
        state: 'Texas',
        city: 'Nordheim',
        county: 'DeWitt',
      },
      {
        state: 'Texas',
        city: 'Spur',
        county: 'Dickens',
      },
      {
        state: 'Texas',
        city: 'Dickens',
        county: 'Dickens',
      },
      {
        state: 'Texas',
        city: 'Carrizo Springs',
        county: 'Dimmit',
      },
      {
        state: 'Texas',
        city: 'Carrizo Hill',
        county: 'Dimmit',
      },
      {
        state: 'Texas',
        city: 'Asherton',
        county: 'Dimmit',
      },
      {
        state: 'Texas',
        city: 'Big Wells',
        county: 'Dimmit',
      },
      {
        state: 'Texas',
        city: 'Catarina',
        county: 'Dimmit',
      },
      {
        state: 'Texas',
        city: 'Brundage',
        county: 'Dimmit',
      },
      {
        state: 'Texas',
        city: 'Clarendon',
        county: 'Donley',
      },
      {
        state: 'Texas',
        city: 'Howardwick',
        county: 'Donley',
      },
      {
        state: 'Texas',
        city: 'Hedley',
        county: 'Donley',
      },
      {
        state: 'Texas',
        city: 'Lelia Lake',
        county: 'Donley',
      },
      {
        state: 'Texas',
        city: 'San Diego',
        county: 'Duval',
      },
      {
        state: 'Texas',
        city: 'Freer',
        county: 'Duval',
      },
      {
        state: 'Texas',
        city: 'Benavides',
        county: 'Duval',
      },
      {
        state: 'Texas',
        city: 'Realitos',
        county: 'Duval',
      },
      {
        state: 'Texas',
        city: 'Concepcion',
        county: 'Duval',
      },
      {
        state: 'Texas',
        city: 'Cisco',
        county: 'Eastland',
      },
      {
        state: 'Texas',
        city: 'Eastland',
        county: 'Eastland',
      },
      {
        state: 'Texas',
        city: 'Ranger',
        county: 'Eastland',
      },
      {
        state: 'Texas',
        city: 'Gorman',
        county: 'Eastland',
      },
      {
        state: 'Texas',
        city: 'Rising Star',
        county: 'Eastland',
      },
      {
        state: 'Texas',
        city: 'Carbon',
        county: 'Eastland',
      },
      {
        state: 'Texas',
        city: 'Odessa',
        county: 'Ector',
      },
      {
        state: 'Texas',
        city: 'West Odessa',
        county: 'Ector',
      },
      {
        state: 'Texas',
        city: 'Gardendale',
        county: 'Ector',
      },
      {
        state: 'Texas',
        city: 'Goldsmith',
        county: 'Ector',
      },
      {
        state: 'Texas',
        city: 'Rocksprings',
        county: 'Edwards',
      },
      {
        state: 'Texas',
        city: 'Barksdale',
        county: 'Edwards',
      },
      {
        state: 'Texas',
        city: 'El Paso',
        county: 'El Paso',
      },
      {
        state: 'Texas',
        city: 'Socorro',
        county: 'El Paso',
      },
      {
        state: 'Texas',
        city: 'Horizon city',
        county: 'El Paso',
      },
      {
        state: 'Texas',
        city: 'Fort Bliss',
        county: 'El Paso',
      },
      {
        state: 'Texas',
        city: 'San Elizario',
        county: 'El Paso',
      },
      {
        state: 'Texas',
        city: 'Homestead Meadows South',
        county: 'El Paso',
      },
      {
        state: 'Texas',
        city: 'Homestead Meadows North',
        county: 'El Paso',
      },
      {
        state: 'Texas',
        city: 'Canutillo',
        county: 'El Paso',
      },
      {
        state: 'Texas',
        city: 'Fabens',
        county: 'El Paso',
      },
      {
        state: 'Texas',
        city: 'Sparks',
        county: 'El Paso',
      },
      {
        state: 'Texas',
        city: 'Anthony',
        county: 'El Paso',
      },
      {
        state: 'Texas',
        city: 'Westway',
        county: 'El Paso',
      },
      {
        state: 'Texas',
        city: 'Vinton',
        county: 'El Paso',
      },
      {
        state: 'Texas',
        city: 'Agua Dulce',
        county: 'El Paso',
      },
      {
        state: 'Texas',
        city: 'Tornillo',
        county: 'El Paso',
      },
      {
        state: 'Texas',
        city: 'Clint',
        county: 'El Paso',
      },
      {
        state: 'Texas',
        city: 'Morning Glory',
        county: 'El Paso',
      },
      {
        state: 'Texas',
        city: 'Prado Verde',
        county: 'El Paso',
      },
      {
        state: 'Texas',
        city: 'Butterfield',
        county: 'El Paso',
      },
      {
        state: 'Texas',
        city: 'Waxahachie',
        county: 'Ellis',
      },
      {
        state: 'Texas',
        city: 'Midlothian',
        county: 'Ellis',
      },
      {
        state: 'Texas',
        city: 'Ennis',
        county: 'Ellis',
      },
      {
        state: 'Texas',
        city: 'Red Oak',
        county: 'Ellis',
      },
      {
        state: 'Texas',
        city: 'Ovilla',
        county: 'Ellis',
      },
      {
        state: 'Texas',
        city: 'Ferris',
        county: 'Ellis',
      },
      {
        state: 'Texas',
        city: 'Palmer',
        county: 'Ellis',
      },
      {
        state: 'Texas',
        city: 'Italy',
        county: 'Ellis',
      },
      {
        state: 'Texas',
        city: 'Oak Leaf',
        county: 'Ellis',
      },
      {
        state: 'Texas',
        city: 'Garrett',
        county: 'Ellis',
      },
      {
        state: 'Texas',
        city: 'Maypearl',
        county: 'Ellis',
      },
      {
        state: 'Texas',
        city: 'Milford',
        county: 'Ellis',
      },
      {
        state: 'Texas',
        city: 'Bardwell',
        county: 'Ellis',
      },
      {
        state: 'Texas',
        city: 'Pecan Hill',
        county: 'Ellis',
      },
      {
        state: 'Texas',
        city: 'Bristol',
        county: 'Ellis',
      },
      {
        state: 'Texas',
        city: 'Alma',
        county: 'Ellis',
      },
      {
        state: 'Texas',
        city: 'Stephenville',
        county: 'Erath',
      },
      {
        state: 'Texas',
        city: 'Dublin',
        county: 'Erath',
      },
      {
        state: 'Texas',
        city: 'Huckabay',
        county: 'Erath',
      },
      {
        state: 'Texas',
        city: 'Lingleville',
        county: 'Erath',
      },
      {
        state: 'Texas',
        city: 'Bluff Dale',
        county: 'Erath',
      },
      {
        state: 'Texas',
        city: 'Marlin',
        county: 'Falls',
      },
      {
        state: 'Texas',
        city: 'Rosebud',
        county: 'Falls',
      },
      {
        state: 'Texas',
        city: 'Chilton',
        county: 'Falls',
      },
      {
        state: 'Texas',
        city: 'Lott',
        county: 'Falls',
      },
      {
        state: 'Texas',
        city: 'Golinda',
        county: 'Falls',
      },
      {
        state: 'Texas',
        city: 'Bonham',
        county: 'Fannin',
      },
      {
        state: 'Texas',
        city: 'Leonard',
        county: 'Fannin',
      },
      {
        state: 'Texas',
        city: 'Honey Grove',
        county: 'Fannin',
      },
      {
        state: 'Texas',
        city: 'Ector',
        county: 'Fannin',
      },
      {
        state: 'Texas',
        city: 'Savoy',
        county: 'Fannin',
      },
      {
        state: 'Texas',
        city: 'Ladonia',
        county: 'Fannin',
      },
      {
        state: 'Texas',
        city: 'Trenton',
        county: 'Fannin',
      },
      {
        state: 'Texas',
        city: 'Dodd city',
        county: 'Fannin',
      },
      {
        state: 'Texas',
        city: 'Bailey',
        county: 'Fannin',
      },
      {
        state: 'Texas',
        city: 'Ravenna',
        county: 'Fannin',
      },
      {
        state: 'Texas',
        city: 'Windom',
        county: 'Fannin',
      },
      {
        state: 'Texas',
        city: 'La Grange',
        county: 'Fayette',
      },
      {
        state: 'Texas',
        city: 'Schulenburg',
        county: 'Fayette',
      },
      {
        state: 'Texas',
        city: 'Flatonia',
        county: 'Fayette',
      },
      {
        state: 'Texas',
        city: 'Plum',
        county: 'Fayette',
      },
      {
        state: 'Texas',
        city: 'Fayetteville',
        county: 'Fayette',
      },
      {
        state: 'Texas',
        city: 'Carmine',
        county: 'Fayette',
      },
      {
        state: 'Texas',
        city: 'Ellinger',
        county: 'Fayette',
      },
      {
        state: 'Texas',
        city: 'Round Top',
        county: 'Fayette',
      },
      {
        state: 'Texas',
        city: 'Rotan',
        county: 'Fisher',
      },
      {
        state: 'Texas',
        city: 'Roby',
        county: 'Fisher',
      },
      {
        state: 'Texas',
        city: 'Sylvester',
        county: 'Fisher',
      },
      {
        state: 'Texas',
        city: 'McCaulley',
        county: 'Fisher',
      },
      {
        state: 'Texas',
        city: 'Floydada',
        county: 'Floyd',
      },
      {
        state: 'Texas',
        city: 'Lockney',
        county: 'Floyd',
      },
      {
        state: 'Texas',
        city: 'Crowell',
        county: 'Foard',
      },
      {
        state: 'Texas',
        city: 'Sugar Land',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Missouri city',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Mission Bend',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Rosenberg',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Fresno',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Pecan Grove',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Cinco Ranch',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Fulshear',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Stafford',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Richmond',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Four Corners',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Meadows Place',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Weston Lakes',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Needville',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Arcola',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Pleak',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Cumings',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Fifth Street',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Beasley',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Simonton',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Fairchilds',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Kendleton',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Thompsons',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Orchard',
        county: 'Fort Bend',
      },
      {
        state: 'Texas',
        city: 'Mount Vernon',
        county: 'Franklin',
      },
      {
        state: 'Texas',
        city: 'Teague',
        county: 'Freestone',
      },
      {
        state: 'Texas',
        city: 'Fairfield',
        county: 'Freestone',
      },
      {
        state: 'Texas',
        city: 'Wortham',
        county: 'Freestone',
      },
      {
        state: 'Texas',
        city: 'Streetman',
        county: 'Freestone',
      },
      {
        state: 'Texas',
        city: 'Kirvin',
        county: 'Freestone',
      },
      {
        state: 'Texas',
        city: 'Pearsall',
        county: 'Frio',
      },
      {
        state: 'Texas',
        city: 'Dilley',
        county: 'Frio',
      },
      {
        state: 'Texas',
        city: 'Bigfoot',
        county: 'Frio',
      },
      {
        state: 'Texas',
        city: 'North Pearsall',
        county: 'Frio',
      },
      {
        state: 'Texas',
        city: 'Hilltop',
        county: 'Frio',
      },
      {
        state: 'Texas',
        city: 'Moore',
        county: 'Frio',
      },
      {
        state: 'Texas',
        city: 'Seminole',
        county: 'Gaines',
      },
      {
        state: 'Texas',
        city: 'Seagraves',
        county: 'Gaines',
      },
      {
        state: 'Texas',
        city: 'Loop',
        county: 'Gaines',
      },
      {
        state: 'Texas',
        city: 'Texas city',
        county: 'Galveston',
      },
      {
        state: 'Texas',
        city: 'League city',
        county: 'Galveston',
      },
      {
        state: 'Texas',
        city: 'Galveston',
        county: 'Galveston',
      },
      {
        state: 'Texas',
        city: 'Friendswood',
        county: 'Galveston',
      },
      {
        state: 'Texas',
        city: 'Dickinson',
        county: 'Galveston',
      },
      {
        state: 'Texas',
        city: 'La Marque',
        county: 'Galveston',
      },
      {
        state: 'Texas',
        city: 'Santa Fe',
        county: 'Galveston',
      },
      {
        state: 'Texas',
        city: 'Bacliff',
        county: 'Galveston',
      },
      {
        state: 'Texas',
        city: 'Hitchcock',
        county: 'Galveston',
      },
      {
        state: 'Texas',
        city: 'San Leon',
        county: 'Galveston',
      },
      {
        state: 'Texas',
        city: 'Bolivar Peninsula',
        county: 'Galveston',
      },
      {
        state: 'Texas',
        city: 'Bayou Vista',
        county: 'Galveston',
      },
      {
        state: 'Texas',
        city: 'Kemah',
        county: 'Galveston',
      },
      {
        state: 'Texas',
        city: 'Clear Lake Shores',
        county: 'Galveston',
      },
      {
        state: 'Texas',
        city: 'Jamaica Beach',
        county: 'Galveston',
      },
      {
        state: 'Texas',
        city: 'Tiki Island',
        county: 'Galveston',
      },
      {
        state: 'Texas',
        city: 'Post',
        county: 'Garza',
      },
      {
        state: 'Texas',
        city: 'Fredericksburg',
        county: 'Gillespie',
      },
      {
        state: 'Texas',
        city: 'Harper',
        county: 'Gillespie',
      },
      {
        state: 'Texas',
        city: 'Stonewall',
        county: 'Gillespie',
      },
      {
        state: 'Texas',
        city: 'Garden city',
        county: 'Glasscock',
      },
      {
        state: 'Texas',
        city: 'Goliad',
        county: 'Goliad',
      },
      {
        state: 'Texas',
        city: 'Gonzales',
        county: 'Gonzales',
      },
      {
        state: 'Texas',
        city: 'Nixon',
        county: 'Gonzales',
      },
      {
        state: 'Texas',
        city: 'Waelder',
        county: 'Gonzales',
      },
      {
        state: 'Texas',
        city: 'Smiley',
        county: 'Gonzales',
      },
      {
        state: 'Texas',
        city: 'Harwood',
        county: 'Gonzales',
      },
      {
        state: 'Texas',
        city: 'Pampa',
        county: 'Gray',
      },
      {
        state: 'Texas',
        city: 'McLean',
        county: 'Gray',
      },
      {
        state: 'Texas',
        city: 'Lefors',
        county: 'Gray',
      },
      {
        state: 'Texas',
        city: 'Alanreed',
        county: 'Gray',
      },
      {
        state: 'Texas',
        city: 'Sherman',
        county: 'Grayson',
      },
      {
        state: 'Texas',
        city: 'Denison',
        county: 'Grayson',
      },
      {
        state: 'Texas',
        city: 'Van Alstyne',
        county: 'Grayson',
      },
      {
        state: 'Texas',
        city: 'Whitesboro',
        county: 'Grayson',
      },
      {
        state: 'Texas',
        city: 'Howe',
        county: 'Grayson',
      },
      {
        state: 'Texas',
        city: 'Pottsboro',
        county: 'Grayson',
      },
      {
        state: 'Texas',
        city: 'Preston',
        county: 'Grayson',
      },
      {
        state: 'Texas',
        city: 'Gunter',
        county: 'Grayson',
      },
      {
        state: 'Texas',
        city: 'Bells',
        county: 'Grayson',
      },
      {
        state: 'Texas',
        city: 'Collinsville',
        county: 'Grayson',
      },
      {
        state: 'Texas',
        city: 'Whitewright',
        county: 'Grayson',
      },
      {
        state: 'Texas',
        city: 'Southmayd',
        county: 'Grayson',
      },
      {
        state: 'Texas',
        city: 'Tioga',
        county: 'Grayson',
      },
      {
        state: 'Texas',
        city: 'Tom Bean',
        county: 'Grayson',
      },
      {
        state: 'Texas',
        city: 'Sherwood Shores',
        county: 'Grayson',
      },
      {
        state: 'Texas',
        city: 'Sadler',
        county: 'Grayson',
      },
      {
        state: 'Texas',
        city: 'Knollwood',
        county: 'Grayson',
      },
      {
        state: 'Texas',
        city: 'Dorchester',
        county: 'Grayson',
      },
      {
        state: 'Texas',
        city: 'Longview',
        county: 'Gregg',
      },
      {
        state: 'Texas',
        city: 'Kilgore',
        county: 'Gregg',
      },
      {
        state: 'Texas',
        city: 'White Oak',
        county: 'Gregg',
      },
      {
        state: 'Texas',
        city: 'Gladewater',
        county: 'Gregg',
      },
      {
        state: 'Texas',
        city: 'Liberty city',
        county: 'Gregg',
      },
      {
        state: 'Texas',
        city: 'Lakeport',
        county: 'Gregg',
      },
      {
        state: 'Texas',
        city: 'Clarksville city',
        county: 'Gregg',
      },
      {
        state: 'Texas',
        city: 'Easton',
        county: 'Gregg',
      },
      {
        state: 'Texas',
        city: 'Warren city',
        county: 'Gregg',
      },
      {
        state: 'Texas',
        city: 'Navasota',
        county: 'Grimes',
      },
      {
        state: 'Texas',
        city: 'Plantersville',
        county: 'Grimes',
      },
      {
        state: 'Texas',
        city: 'Bedias',
        county: 'Grimes',
      },
      {
        state: 'Texas',
        city: 'Anderson',
        county: 'Grimes',
      },
      {
        state: 'Texas',
        city: 'Iola',
        county: 'Grimes',
      },
      {
        state: 'Texas',
        city: 'Richards',
        county: 'Grimes',
      },
      {
        state: 'Texas',
        city: 'Todd Mission',
        county: 'Grimes',
      },
      {
        state: 'Texas',
        city: 'Shiro',
        county: 'Grimes',
      },
      {
        state: 'Texas',
        city: 'Pinebrook',
        county: 'Grimes',
      },
      {
        state: 'Texas',
        city: 'Cibolo',
        county: 'Guadalupe',
      },
      {
        state: 'Texas',
        city: 'Seguin',
        county: 'Guadalupe',
      },
      {
        state: 'Texas',
        city: 'Redwood',
        county: 'Guadalupe',
      },
      {
        state: 'Texas',
        city: 'McQueeney',
        county: 'Guadalupe',
      },
      {
        state: 'Texas',
        city: 'Lake Dunlap',
        county: 'Guadalupe',
      },
      {
        state: 'Texas',
        city: 'Marion',
        county: 'Guadalupe',
      },
      {
        state: 'Texas',
        city: 'Geronimo',
        county: 'Guadalupe',
      },
      {
        state: 'Texas',
        city: 'New Berlin',
        county: 'Guadalupe',
      },
      {
        state: 'Texas',
        city: 'Santa Clara',
        county: 'Guadalupe',
      },
      {
        state: 'Texas',
        city: 'Zuehl',
        county: 'Guadalupe',
      },
      {
        state: 'Texas',
        city: 'Kingsbury',
        county: 'Guadalupe',
      },
      {
        state: 'Texas',
        city: 'Staples',
        county: 'Guadalupe',
      },
      {
        state: 'Texas',
        city: 'Plainview',
        county: 'Hale',
      },
      {
        state: 'Texas',
        city: 'Abernathy',
        county: 'Hale',
      },
      {
        state: 'Texas',
        city: 'Hale Center',
        county: 'Hale',
      },
      {
        state: 'Texas',
        city: 'Seth Ward',
        county: 'Hale',
      },
      {
        state: 'Texas',
        city: 'Petersburg',
        county: 'Hale',
      },
      {
        state: 'Texas',
        city: 'Edmonson',
        county: 'Hale',
      },
      {
        state: 'Texas',
        city: 'Memphis',
        county: 'Hall',
      },
      {
        state: 'Texas',
        city: 'Turkey',
        county: 'Hall',
      },
      {
        state: 'Texas',
        city: 'Estelline',
        county: 'Hall',
      },
      {
        state: 'Texas',
        city: 'Hamilton',
        county: 'Hamilton',
      },
      {
        state: 'Texas',
        city: 'Hico',
        county: 'Hamilton',
      },
      {
        state: 'Texas',
        city: 'Carlton',
        county: 'Hamilton',
      },
      {
        state: 'Texas',
        city: 'Spearman',
        county: 'Hansford',
      },
      {
        state: 'Texas',
        city: 'Gruver',
        county: 'Hansford',
      },
      {
        state: 'Texas',
        city: 'Morse',
        county: 'Hansford',
      },
      {
        state: 'Texas',
        city: 'Quanah',
        county: 'Hardeman',
      },
      {
        state: 'Texas',
        city: 'Chillicothe',
        county: 'Hardeman',
      },
      {
        state: 'Texas',
        city: 'Lumberton',
        county: 'Hardin',
      },
      {
        state: 'Texas',
        city: 'Silsbee',
        county: 'Hardin',
      },
      {
        state: 'Texas',
        city: 'Sour Lake',
        county: 'Hardin',
      },
      {
        state: 'Texas',
        city: 'Kountze',
        county: 'Hardin',
      },
      {
        state: 'Texas',
        city: 'Pinewood Estates',
        county: 'Hardin',
      },
      {
        state: 'Texas',
        city: 'Wildwood',
        county: 'Hardin',
      },
      {
        state: 'Texas',
        city: 'Rose Hill Acres',
        county: 'Hardin',
      },
      {
        state: 'Texas',
        city: 'Houston',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Pasadena',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Atascocita',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Baytown',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Spring',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Channelview',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'La Porte',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Deer Park',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Cloverleaf',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Katy',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Bellaire',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Humble',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'South Houston',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Aldine',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'West University Place',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Seabrook',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Tomball',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Webster',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Galena Park',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Jacinto city',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Jersey Village',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Highlands',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Nassau Bay',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Hunters Creek Village',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Spring Valley Village',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Bunker Hill Village',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Taylor Lake Village',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Barrett',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Piney Point Village',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'El Lago',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Hedwig Village',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Sheldon',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Crosby',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Southside Place',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Shoreacres',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Hilshire Village',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: "Morgan's Point",
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Marshall',
        county: 'Harrison',
      },
      {
        state: 'Texas',
        city: 'Hallsville',
        county: 'Harrison',
      },
      {
        state: 'Texas',
        city: 'Waskom',
        county: 'Harrison',
      },
      {
        state: 'Texas',
        city: 'Scottsville',
        county: 'Harrison',
      },
      {
        state: 'Texas',
        city: 'Nesbitt',
        county: 'Harrison',
      },
      {
        state: 'Texas',
        city: 'Uncertain',
        county: 'Harrison',
      },
      {
        state: 'Texas',
        city: 'Hartley',
        county: 'Hartley',
      },
      {
        state: 'Texas',
        city: 'Channing',
        county: 'Hartley',
      },
      {
        state: 'Texas',
        city: 'Haskell',
        county: 'Haskell',
      },
      {
        state: 'Texas',
        city: 'Stamford',
        county: 'Haskell',
      },
      {
        state: 'Texas',
        city: 'Rule',
        county: 'Haskell',
      },
      {
        state: 'Texas',
        city: 'Rochester',
        county: 'Haskell',
      },
      {
        state: 'Texas',
        city: 'Weinert',
        county: 'Haskell',
      },
      {
        state: 'Texas',
        city: "O'Brien",
        county: 'Haskell',
      },
      {
        state: 'Texas',
        city: 'San Marcos',
        county: 'Hays',
      },
      {
        state: 'Texas',
        city: 'Kyle',
        county: 'Hays',
      },
      {
        state: 'Texas',
        city: 'Buda',
        county: 'Hays',
      },
      {
        state: 'Texas',
        city: 'Belterra',
        county: 'Hays',
      },
      {
        state: 'Texas',
        city: 'Dripping Springs',
        county: 'Hays',
      },
      {
        state: 'Texas',
        city: 'Wimberley',
        county: 'Hays',
      },
      {
        state: 'Texas',
        city: 'Woodcreek',
        county: 'Hays',
      },
      {
        state: 'Texas',
        city: 'Uhland',
        county: 'Hays',
      },
      {
        state: 'Texas',
        city: 'Niederwald',
        county: 'Hays',
      },
      {
        state: 'Texas',
        city: 'Mountain city',
        county: 'Hays',
      },
      {
        state: 'Texas',
        city: 'Bear Creek',
        county: 'Hays',
      },
      {
        state: 'Texas',
        city: 'Hays',
        county: 'Hays',
      },
      {
        state: 'Texas',
        city: 'Driftwood',
        county: 'Hays',
      },
      {
        state: 'Texas',
        city: 'Canadian',
        county: 'Hemphill',
      },
      {
        state: 'Texas',
        city: 'Glazier',
        county: 'Hemphill',
      },
      {
        state: 'Texas',
        city: 'Athens',
        county: 'Henderson',
      },
      {
        state: 'Texas',
        city: 'Gun Barrel city',
        county: 'Henderson',
      },
      {
        state: 'Texas',
        city: 'Chandler',
        county: 'Henderson',
      },
      {
        state: 'Texas',
        city: 'Tool',
        county: 'Henderson',
      },
      {
        state: 'Texas',
        city: 'Malakoff',
        county: 'Henderson',
      },
      {
        state: 'Texas',
        city: 'Brownsboro',
        county: 'Henderson',
      },
      {
        state: 'Texas',
        city: 'Eustace',
        county: 'Henderson',
      },
      {
        state: 'Texas',
        city: 'Seven Points',
        county: 'Henderson',
      },
      {
        state: 'Texas',
        city: 'Berryville',
        county: 'Henderson',
      },
      {
        state: 'Texas',
        city: 'Log Cabin',
        county: 'Henderson',
      },
      {
        state: 'Texas',
        city: 'Trinidad',
        county: 'Henderson',
      },
      {
        state: 'Texas',
        city: 'Payne Springs',
        county: 'Henderson',
      },
      {
        state: 'Texas',
        city: 'Sunrise Shores',
        county: 'Henderson',
      },
      {
        state: 'Texas',
        city: 'Star Harbor',
        county: 'Henderson',
      },
      {
        state: 'Texas',
        city: 'Murchison',
        county: 'Henderson',
      },
      {
        state: 'Texas',
        city: 'Poynor',
        county: 'Henderson',
      },
      {
        state: 'Texas',
        city: 'Coffee city',
        county: 'Henderson',
      },
      {
        state: 'Texas',
        city: 'Enchanted Oaks',
        county: 'Henderson',
      },
      {
        state: 'Texas',
        city: 'Moore Station',
        county: 'Henderson',
      },
      {
        state: 'Texas',
        city: 'Caney city',
        county: 'Henderson',
      },
      {
        state: 'Texas',
        city: 'McAllen',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Edinburg',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Mission',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Pharr',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Weslaco',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'San Juan',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Alamo',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Alton',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Donna',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Mercedes',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Palmview',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Hidalgo',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'La Homa',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Murillo',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Olivarez',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Mila Doce',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Doolittle',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Penitas',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Elsa',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Salida del Sol Estates',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Doffing',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Progreso',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'La Joya',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'San Carlos',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'North Alamo',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Scissors',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Sullivan city',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Midway North',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'La Blanca',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'South Alamo',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Citrus city',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Edcouch',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'La Villa',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Palmhurst',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Perezville',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Midway South',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Palmview South',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Indian Hills',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Monte Alto',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Llano Grande',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Heidelberg',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Lopezville',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Abram',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'West Sharyland',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'C��sar Ch��vez',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Hargill',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Muniz',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Linn',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Relampago',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Granjeno',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Progreso Lakes',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Havana',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Laguna Seca',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'La Coma Heights',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Villa Verde',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Cuevitas',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Harding Gill Tract',
        county: 'Hidalgo',
      },
      {
        state: 'Texas',
        city: 'Hillsboro',
        county: 'Hill',
      },
      {
        state: 'Texas',
        city: 'Whitney',
        county: 'Hill',
      },
      {
        state: 'Texas',
        city: 'Itasca',
        county: 'Hill',
      },
      {
        state: 'Texas',
        city: 'Hubbard',
        county: 'Hill',
      },
      {
        state: 'Texas',
        city: 'Blum',
        county: 'Hill',
      },
      {
        state: 'Texas',
        city: 'Mount Calm',
        county: 'Hill',
      },
      {
        state: 'Texas',
        city: 'Malone',
        county: 'Hill',
      },
      {
        state: 'Texas',
        city: 'Bynum',
        county: 'Hill',
      },
      {
        state: 'Texas',
        city: 'Covington',
        county: 'Hill',
      },
      {
        state: 'Texas',
        city: 'Abbott',
        county: 'Hill',
      },
      {
        state: 'Texas',
        city: 'Penelope',
        county: 'Hill',
      },
      {
        state: 'Texas',
        city: 'Aquilla',
        county: 'Hill',
      },
      {
        state: 'Texas',
        city: 'Mertens',
        county: 'Hill',
      },
      {
        state: 'Texas',
        city: 'Levelland',
        county: 'Hockley',
      },
      {
        state: 'Texas',
        city: 'Sundown',
        county: 'Hockley',
      },
      {
        state: 'Texas',
        city: 'Anton',
        county: 'Hockley',
      },
      {
        state: 'Texas',
        city: 'Smyer',
        county: 'Hockley',
      },
      {
        state: 'Texas',
        city: 'Ropesville',
        county: 'Hockley',
      },
      {
        state: 'Texas',
        city: 'Opdyke West',
        county: 'Hockley',
      },
      {
        state: 'Texas',
        city: 'Whitharral',
        county: 'Hockley',
      },
      {
        state: 'Texas',
        city: 'Granbury',
        county: 'Hood',
      },
      {
        state: 'Texas',
        city: 'Pecan Plantation',
        county: 'Hood',
      },
      {
        state: 'Texas',
        city: 'DeCordova',
        county: 'Hood',
      },
      {
        state: 'Texas',
        city: 'Oak Trail Shores',
        county: 'Hood',
      },
      {
        state: 'Texas',
        city: 'Tolar',
        county: 'Hood',
      },
      {
        state: 'Texas',
        city: 'Cresson',
        county: 'Hood',
      },
      {
        state: 'Texas',
        city: 'Canyon Creek',
        county: 'Hood',
      },
      {
        state: 'Texas',
        city: 'Stockton Bend',
        county: 'Hood',
      },
      {
        state: 'Texas',
        city: 'Lipan',
        county: 'Hood',
      },
      {
        state: 'Texas',
        city: 'Sulphur Springs',
        county: 'Hopkins',
      },
      {
        state: 'Texas',
        city: 'Cumby',
        county: 'Hopkins',
      },
      {
        state: 'Texas',
        city: 'Como',
        county: 'Hopkins',
      },
      {
        state: 'Texas',
        city: 'Tira',
        county: 'Hopkins',
      },
      {
        state: 'Texas',
        city: 'Crockett',
        county: 'Houston',
      },
      {
        state: 'Texas',
        city: 'Grapeland',
        county: 'Houston',
      },
      {
        state: 'Texas',
        city: 'Lovelady',
        county: 'Houston',
      },
      {
        state: 'Texas',
        city: 'Kennard',
        county: 'Houston',
      },
      {
        state: 'Texas',
        city: 'Latexo',
        county: 'Houston',
      },
      {
        state: 'Texas',
        city: 'Big Spring',
        county: 'Howard',
      },
      {
        state: 'Texas',
        city: 'Sand Springs',
        county: 'Howard',
      },
      {
        state: 'Texas',
        city: 'Coahoma',
        county: 'Howard',
      },
      {
        state: 'Texas',
        city: 'Forsan',
        county: 'Howard',
      },
      {
        state: 'Texas',
        city: 'Fort Hancock',
        county: 'Hudspeth',
      },
      {
        state: 'Texas',
        city: 'Sierra Blanca',
        county: 'Hudspeth',
      },
      {
        state: 'Texas',
        city: 'Dell city',
        county: 'Hudspeth',
      },
      {
        state: 'Texas',
        city: 'Acala',
        county: 'Hudspeth',
      },
      {
        state: 'Texas',
        city: 'Greenville',
        county: 'Hunt',
      },
      {
        state: 'Texas',
        city: 'Commerce',
        county: 'Hunt',
      },
      {
        state: 'Texas',
        city: 'West Tawakoni',
        county: 'Hunt',
      },
      {
        state: 'Texas',
        city: 'Caddo Mills',
        county: 'Hunt',
      },
      {
        state: 'Texas',
        city: 'Quinlan',
        county: 'Hunt',
      },
      {
        state: 'Texas',
        city: 'Wolfe city',
        county: 'Hunt',
      },
      {
        state: 'Texas',
        city: 'Celeste',
        county: 'Hunt',
      },
      {
        state: 'Texas',
        city: 'Campbell',
        county: 'Hunt',
      },
      {
        state: 'Texas',
        city: 'Lone Oak',
        county: 'Hunt',
      },
      {
        state: 'Texas',
        city: 'Hawk Cove',
        county: 'Hunt',
      },
      {
        state: 'Texas',
        city: 'Union Valley',
        county: 'Hunt',
      },
      {
        state: 'Texas',
        city: 'Neylandville',
        county: 'Hunt',
      },
      {
        state: 'Texas',
        city: 'Borger',
        county: 'Hutchinson',
      },
      {
        state: 'Texas',
        city: 'Fritch',
        county: 'Hutchinson',
      },
      {
        state: 'Texas',
        city: 'Stinnett',
        county: 'Hutchinson',
      },
      {
        state: 'Texas',
        city: 'Lake Meredith Estates',
        county: 'Hutchinson',
      },
      {
        state: 'Texas',
        city: 'Sanford',
        county: 'Hutchinson',
      },
      {
        state: 'Texas',
        city: 'Mertzon',
        county: 'Irion',
      },
      {
        state: 'Texas',
        city: 'Jacksboro',
        county: 'Jack',
      },
      {
        state: 'Texas',
        city: 'Bryson',
        county: 'Jack',
      },
      {
        state: 'Texas',
        city: 'Perrin',
        county: 'Jack',
      },
      {
        state: 'Texas',
        city: 'Edna',
        county: 'Jackson',
      },
      {
        state: 'Texas',
        city: 'Ganado',
        county: 'Jackson',
      },
      {
        state: 'Texas',
        city: 'Lolita',
        county: 'Jackson',
      },
      {
        state: 'Texas',
        city: 'Vanderbilt',
        county: 'Jackson',
      },
      {
        state: 'Texas',
        city: 'La Ward',
        county: 'Jackson',
      },
      {
        state: 'Texas',
        city: 'Jasper',
        county: 'Jasper',
      },
      {
        state: 'Texas',
        city: 'Kirbyville',
        county: 'Jasper',
      },
      {
        state: 'Texas',
        city: 'Buna',
        county: 'Jasper',
      },
      {
        state: 'Texas',
        city: 'Evadale',
        county: 'Jasper',
      },
      {
        state: 'Texas',
        city: 'Sam Rayburn',
        county: 'Jasper',
      },
      {
        state: 'Texas',
        city: 'Browndell',
        county: 'Jasper',
      },
      {
        state: 'Texas',
        city: 'Fort Davis',
        county: 'Jeff Davis',
      },
      {
        state: 'Texas',
        city: 'Valentine',
        county: 'Jeff Davis',
      },
      {
        state: 'Texas',
        city: 'Port Arthur',
        county: 'Jefferson',
      },
      {
        state: 'Texas',
        city: 'Beaumont',
        county: 'Jefferson',
      },
      {
        state: 'Texas',
        city: 'Nederland',
        county: 'Jefferson',
      },
      {
        state: 'Texas',
        city: 'Groves',
        county: 'Jefferson',
      },
      {
        state: 'Texas',
        city: 'Port Neches',
        county: 'Jefferson',
      },
      {
        state: 'Texas',
        city: 'Central Gardens',
        county: 'Jefferson',
      },
      {
        state: 'Texas',
        city: 'Fannett',
        county: 'Jefferson',
      },
      {
        state: 'Texas',
        city: 'Hamshire',
        county: 'Jefferson',
      },
      {
        state: 'Texas',
        city: 'Bevil Oaks',
        county: 'Jefferson',
      },
      {
        state: 'Texas',
        city: 'China',
        county: 'Jefferson',
      },
      {
        state: 'Texas',
        city: 'Beauxart Gardens',
        county: 'Jefferson',
      },
      {
        state: 'Texas',
        city: 'Nome',
        county: 'Jefferson',
      },
      {
        state: 'Texas',
        city: 'Taylor Landing',
        county: 'Jefferson',
      },
      {
        state: 'Texas',
        city: 'Hebbronville',
        county: 'Jim Hogg',
      },
      {
        state: 'Texas',
        city: 'Thompsonville',
        county: 'Jim Hogg',
      },
      {
        state: 'Texas',
        city: 'Las Lomitas',
        county: 'Jim Hogg',
      },
      {
        state: 'Texas',
        city: 'South Fork Estates',
        county: 'Jim Hogg',
      },
      {
        state: 'Texas',
        city: 'Guerra',
        county: 'Jim Hogg',
      },
      {
        state: 'Texas',
        city: 'Alice',
        county: 'Jim Wells',
      },
      {
        state: 'Texas',
        city: 'Premont',
        county: 'Jim Wells',
      },
      {
        state: 'Texas',
        city: 'Rancho Alegre',
        county: 'Jim Wells',
      },
      {
        state: 'Texas',
        city: 'Ben Bolt',
        county: 'Jim Wells',
      },
      {
        state: 'Texas',
        city: 'Orange Grove',
        county: 'Jim Wells',
      },
      {
        state: 'Texas',
        city: 'Coyote Acres',
        county: 'Jim Wells',
      },
      {
        state: 'Texas',
        city: 'South La Paloma',
        county: 'Jim Wells',
      },
      {
        state: 'Texas',
        city: 'K-Bar Ranch',
        county: 'Jim Wells',
      },
      {
        state: 'Texas',
        city: 'Sandia',
        county: 'Jim Wells',
      },
      {
        state: 'Texas',
        city: 'Alfred',
        county: 'Jim Wells',
      },
      {
        state: 'Texas',
        city: 'Alice Acres',
        county: 'Jim Wells',
      },
      {
        state: 'Texas',
        city: 'Owl Ranch',
        county: 'Jim Wells',
      },
      {
        state: 'Texas',
        city: 'Amargosa',
        county: 'Jim Wells',
      },
      {
        state: 'Texas',
        city: 'Westdale',
        county: 'Jim Wells',
      },
      {
        state: 'Texas',
        city: 'Loma Linda East',
        county: 'Jim Wells',
      },
      {
        state: 'Texas',
        city: 'Burleson',
        county: 'Johnson',
      },
      {
        state: 'Texas',
        city: 'Cleburne',
        county: 'Johnson',
      },
      {
        state: 'Texas',
        city: 'Joshua',
        county: 'Johnson',
      },
      {
        state: 'Texas',
        city: 'Keene',
        county: 'Johnson',
      },
      {
        state: 'Texas',
        city: 'Alvarado',
        county: 'Johnson',
      },
      {
        state: 'Texas',
        city: 'Venus',
        county: 'Johnson',
      },
      {
        state: 'Texas',
        city: 'The Homesteads',
        county: 'Johnson',
      },
      {
        state: 'Texas',
        city: 'Grandview',
        county: 'Johnson',
      },
      {
        state: 'Texas',
        city: 'Godley',
        county: 'Johnson',
      },
      {
        state: 'Texas',
        city: 'Rio Vista',
        county: 'Johnson',
      },
      {
        state: 'Texas',
        city: 'Briaroaks',
        county: 'Johnson',
      },
      {
        state: 'Texas',
        city: 'Cross Timber',
        county: 'Johnson',
      },
      {
        state: 'Texas',
        city: 'Coyote Flats',
        county: 'Johnson',
      },
      {
        state: 'Texas',
        city: 'Anson',
        county: 'Jones',
      },
      {
        state: 'Texas',
        city: 'Hamlin',
        county: 'Jones',
      },
      {
        state: 'Texas',
        city: 'Hawley',
        county: 'Jones',
      },
      {
        state: 'Texas',
        city: 'Lueders',
        county: 'Jones',
      },
      {
        state: 'Texas',
        city: 'Kenedy',
        county: 'Karnes',
      },
      {
        state: 'Texas',
        city: 'Karnes city',
        county: 'Karnes',
      },
      {
        state: 'Texas',
        city: 'Runge',
        county: 'Karnes',
      },
      {
        state: 'Texas',
        city: 'Falls city',
        county: 'Karnes',
      },
      {
        state: 'Texas',
        city: 'Forney',
        county: 'Kaufman',
      },
      {
        state: 'Texas',
        city: 'Terrell',
        county: 'Kaufman',
      },
      {
        state: 'Texas',
        city: 'Travis Ranch',
        county: 'Kaufman',
      },
      {
        state: 'Texas',
        city: 'Heartland',
        county: 'Kaufman',
      },
      {
        state: 'Texas',
        city: 'Kaufman',
        county: 'Kaufman',
      },
      {
        state: 'Texas',
        city: 'Crandall',
        county: 'Kaufman',
      },
      {
        state: 'Texas',
        city: 'Mabank',
        county: 'Kaufman',
      },
      {
        state: 'Texas',
        city: 'Combine',
        county: 'Kaufman',
      },
      {
        state: 'Texas',
        city: 'Talty',
        county: 'Kaufman',
      },
      {
        state: 'Texas',
        city: 'Kemp',
        county: 'Kaufman',
      },
      {
        state: 'Texas',
        city: 'Elmo',
        county: 'Kaufman',
      },
      {
        state: 'Texas',
        city: 'Oak Grove',
        county: 'Kaufman',
      },
      {
        state: 'Texas',
        city: 'Oak Ridge',
        county: 'Kaufman',
      },
      {
        state: 'Texas',
        city: 'Scurry',
        county: 'Kaufman',
      },
      {
        state: 'Texas',
        city: 'Post Oak Bend city',
        county: 'Kaufman',
      },
      {
        state: 'Texas',
        city: 'Rosser',
        county: 'Kaufman',
      },
      {
        state: 'Texas',
        city: 'Cottonwood',
        county: 'Kaufman',
      },
      {
        state: 'Texas',
        city: 'Grays Prairie',
        county: 'Kaufman',
      },
      {
        state: 'Texas',
        city: 'Boerne',
        county: 'Kendall',
      },
      {
        state: 'Texas',
        city: 'Comfort',
        county: 'Kendall',
      },
      {
        state: 'Texas',
        city: 'Sarita',
        county: 'Kenedy',
      },
      {
        state: 'Texas',
        city: 'Jayton',
        county: 'Kent',
      },
      {
        state: 'Texas',
        city: 'Girard',
        county: 'Kent',
      },
      {
        state: 'Texas',
        city: 'Kerrville',
        county: 'Kerr',
      },
      {
        state: 'Texas',
        city: 'Ingram',
        county: 'Kerr',
      },
      {
        state: 'Texas',
        city: 'Center Point',
        county: 'Kerr',
      },
      {
        state: 'Texas',
        city: 'Junction',
        county: 'Kimble',
      },
      {
        state: 'Texas',
        city: 'Guthrie',
        county: 'King',
      },
      {
        state: 'Texas',
        city: 'Brackettville',
        county: 'Kinney',
      },
      {
        state: 'Texas',
        city: 'Fort Clark Springs',
        county: 'Kinney',
      },
      {
        state: 'Texas',
        city: 'Spofford',
        county: 'Kinney',
      },
      {
        state: 'Texas',
        city: 'Kingsville',
        county: 'Kleberg',
      },
      {
        state: 'Texas',
        city: 'Ricardo',
        county: 'Kleberg',
      },
      {
        state: 'Texas',
        city: 'Riviera',
        county: 'Kleberg',
      },
      {
        state: 'Texas',
        city: 'Munday',
        county: 'Knox',
      },
      {
        state: 'Texas',
        city: 'Knox city',
        county: 'Knox',
      },
      {
        state: 'Texas',
        city: 'Goree',
        county: 'Knox',
      },
      {
        state: 'Texas',
        city: 'Benjamin',
        county: 'Knox',
      },
      {
        state: 'Texas',
        city: 'Cotulla',
        county: 'La Salle',
      },
      {
        state: 'Texas',
        city: 'Encinal',
        county: 'La Salle',
      },
      {
        state: 'Texas',
        city: 'Fowlerton',
        county: 'La Salle',
      },
      {
        state: 'Texas',
        city: 'Paris',
        county: 'Lamar',
      },
      {
        state: 'Texas',
        city: 'Reno',
        county: 'Lamar',
      },
      {
        state: 'Texas',
        city: 'Blossom',
        county: 'Lamar',
      },
      {
        state: 'Texas',
        city: 'Powderly',
        county: 'Lamar',
      },
      {
        state: 'Texas',
        city: 'Deport',
        county: 'Lamar',
      },
      {
        state: 'Texas',
        city: 'Roxton',
        county: 'Lamar',
      },
      {
        state: 'Texas',
        city: 'Petty',
        county: 'Lamar',
      },
      {
        state: 'Texas',
        city: 'Sun Valley',
        county: 'Lamar',
      },
      {
        state: 'Texas',
        city: 'Brookston',
        county: 'Lamar',
      },
      {
        state: 'Texas',
        city: 'Toco',
        county: 'Lamar',
      },
      {
        state: 'Texas',
        city: 'Littlefield',
        county: 'Lamb',
      },
      {
        state: 'Texas',
        city: 'Olton',
        county: 'Lamb',
      },
      {
        state: 'Texas',
        city: 'Amherst',
        county: 'Lamb',
      },
      {
        state: 'Texas',
        city: 'Sudan',
        county: 'Lamb',
      },
      {
        state: 'Texas',
        city: 'Earth',
        county: 'Lamb',
      },
      {
        state: 'Texas',
        city: 'Springlake',
        county: 'Lamb',
      },
      {
        state: 'Texas',
        city: 'Spade',
        county: 'Lamb',
      },
      {
        state: 'Texas',
        city: 'Lampasas',
        county: 'Lampasas',
      },
      {
        state: 'Texas',
        city: 'Kempner',
        county: 'Lampasas',
      },
      {
        state: 'Texas',
        city: 'Lometa',
        county: 'Lampasas',
      },
      {
        state: 'Texas',
        city: 'Yoakum',
        county: 'Lavaca',
      },
      {
        state: 'Texas',
        city: 'Hallettsville',
        county: 'Lavaca',
      },
      {
        state: 'Texas',
        city: 'Shiner',
        county: 'Lavaca',
      },
      {
        state: 'Texas',
        city: 'Moulton',
        county: 'Lavaca',
      },
      {
        state: 'Texas',
        city: 'Giddings',
        county: 'Lee',
      },
      {
        state: 'Texas',
        city: 'Lexington',
        county: 'Lee',
      },
      {
        state: 'Texas',
        city: 'Dime Box',
        county: 'Lee',
      },
      {
        state: 'Texas',
        city: 'Buffalo',
        county: 'Leon',
      },
      {
        state: 'Texas',
        city: 'Centerville',
        county: 'Leon',
      },
      {
        state: 'Texas',
        city: 'Normangee',
        county: 'Leon',
      },
      {
        state: 'Texas',
        city: 'Jewett',
        county: 'Leon',
      },
      {
        state: 'Texas',
        city: 'Hilltop Lakes',
        county: 'Leon',
      },
      {
        state: 'Texas',
        city: 'Oakwood',
        county: 'Leon',
      },
      {
        state: 'Texas',
        city: 'Leona',
        county: 'Leon',
      },
      {
        state: 'Texas',
        city: 'Marquez',
        county: 'Leon',
      },
      {
        state: 'Texas',
        city: 'Dayton',
        county: 'Liberty',
      },
      {
        state: 'Texas',
        city: 'Liberty',
        county: 'Liberty',
      },
      {
        state: 'Texas',
        city: 'Cleveland',
        county: 'Liberty',
      },
      {
        state: 'Texas',
        city: 'Plum Grove',
        county: 'Liberty',
      },
      {
        state: 'Texas',
        city: 'Daisetta',
        county: 'Liberty',
      },
      {
        state: 'Texas',
        city: 'Ames',
        county: 'Liberty',
      },
      {
        state: 'Texas',
        city: 'Hardin',
        county: 'Liberty',
      },
      {
        state: 'Texas',
        city: 'Kenefick',
        county: 'Liberty',
      },
      {
        state: 'Texas',
        city: 'Big Thicket Lake Estates',
        county: 'Liberty',
      },
      {
        state: 'Texas',
        city: 'Hull',
        county: 'Liberty',
      },
      {
        state: 'Texas',
        city: 'Devers',
        county: 'Liberty',
      },
      {
        state: 'Texas',
        city: 'North Cleveland',
        county: 'Liberty',
      },
      {
        state: 'Texas',
        city: 'Dayton Lakes',
        county: 'Liberty',
      },
      {
        state: 'Texas',
        city: 'Mexia',
        county: 'Limestone',
      },
      {
        state: 'Texas',
        city: 'Groesbeck',
        county: 'Limestone',
      },
      {
        state: 'Texas',
        city: 'Coolidge',
        county: 'Limestone',
      },
      {
        state: 'Texas',
        city: 'Kosse',
        county: 'Limestone',
      },
      {
        state: 'Texas',
        city: 'Thornton',
        county: 'Limestone',
      },
      {
        state: 'Texas',
        city: 'Tehuacana',
        county: 'Limestone',
      },
      {
        state: 'Texas',
        city: 'Booker',
        county: 'Lipscomb',
      },
      {
        state: 'Texas',
        city: 'Higgins',
        county: 'Lipscomb',
      },
      {
        state: 'Texas',
        city: 'Follett',
        county: 'Lipscomb',
      },
      {
        state: 'Texas',
        city: 'Darrouzett',
        county: 'Lipscomb',
      },
      {
        state: 'Texas',
        city: 'Lipscomb',
        county: 'Lipscomb',
      },
      {
        state: 'Texas',
        city: 'George West',
        county: 'Live Oak',
      },
      {
        state: 'Texas',
        city: 'Three Rivers',
        county: 'Live Oak',
      },
      {
        state: 'Texas',
        city: 'Kingsland',
        county: 'Llano',
      },
      {
        state: 'Texas',
        city: 'Horseshoe Bay',
        county: 'Llano',
      },
      {
        state: 'Texas',
        city: 'Llano',
        county: 'Llano',
      },
      {
        state: 'Texas',
        city: 'Buchanan Dam',
        county: 'Llano',
      },
      {
        state: 'Texas',
        city: 'Sunrise Beach Village',
        county: 'Llano',
      },
      {
        state: 'Texas',
        city: 'Buchanan Lake Village',
        county: 'Llano',
      },
      {
        state: 'Texas',
        city: 'Tow',
        county: 'Llano',
      },
      {
        state: 'Texas',
        city: 'Mentone',
        county: 'Loving',
      },
      {
        state: 'Texas',
        city: 'Lubbock',
        county: 'Lubbock',
      },
      {
        state: 'Texas',
        city: 'Slaton',
        county: 'Lubbock',
      },
      {
        state: 'Texas',
        city: 'Wolfforth',
        county: 'Lubbock',
      },
      {
        state: 'Texas',
        city: 'Shallowater',
        county: 'Lubbock',
      },
      {
        state: 'Texas',
        city: 'Idalou',
        county: 'Lubbock',
      },
      {
        state: 'Texas',
        city: 'New Deal',
        county: 'Lubbock',
      },
      {
        state: 'Texas',
        city: 'Ransom Canyon',
        county: 'Lubbock',
      },
      {
        state: 'Texas',
        city: 'Buffalo Springs',
        county: 'Lubbock',
      },
      {
        state: 'Texas',
        city: 'Tahoka',
        county: 'Lynn',
      },
      {
        state: 'Texas',
        city: "O'Donnell",
        county: 'Lynn',
      },
      {
        state: 'Texas',
        city: 'New Home',
        county: 'Lynn',
      },
      {
        state: 'Texas',
        city: 'Wilson',
        county: 'Lynn',
      },
      {
        state: 'Texas',
        city: 'Madisonville',
        county: 'Madison',
      },
      {
        state: 'Texas',
        city: 'Midway',
        county: 'Madison',
      },
      {
        state: 'Texas',
        city: 'Jefferson',
        county: 'Marion',
      },
      {
        state: 'Texas',
        city: 'Pine Harbor',
        county: 'Marion',
      },
      {
        state: 'Texas',
        city: 'Stanton',
        county: 'Martin',
      },
      {
        state: 'Texas',
        city: 'Ackerly',
        county: 'Martin',
      },
      {
        state: 'Texas',
        city: 'Mason',
        county: 'Mason',
      },
      {
        state: 'Texas',
        city: 'Bay city',
        county: 'Matagorda',
      },
      {
        state: 'Texas',
        city: 'Palacios',
        county: 'Matagorda',
      },
      {
        state: 'Texas',
        city: 'Sargent',
        county: 'Matagorda',
      },
      {
        state: 'Texas',
        city: 'Van Vleck',
        county: 'Matagorda',
      },
      {
        state: 'Texas',
        city: 'Markham',
        county: 'Matagorda',
      },
      {
        state: 'Texas',
        city: 'Wadsworth',
        county: 'Matagorda',
      },
      {
        state: 'Texas',
        city: 'Matagorda',
        county: 'Matagorda',
      },
      {
        state: 'Texas',
        city: 'Blessing',
        county: 'Matagorda',
      },
      {
        state: 'Texas',
        city: 'Midfield',
        county: 'Matagorda',
      },
      {
        state: 'Texas',
        city: 'Eagle Pass',
        county: 'Maverick',
      },
      {
        state: 'Texas',
        city: 'Eidson Road',
        county: 'Maverick',
      },
      {
        state: 'Texas',
        city: 'Elm Creek',
        county: 'Maverick',
      },
      {
        state: 'Texas',
        city: 'Rosita',
        county: 'Maverick',
      },
      {
        state: 'Texas',
        city: 'Chula Vista',
        county: 'Maverick',
      },
      {
        state: 'Texas',
        city: 'Siesta Acres',
        county: 'Maverick',
      },
      {
        state: 'Texas',
        city: 'Fabrica',
        county: 'Maverick',
      },
      {
        state: 'Texas',
        city: 'Seco Mines',
        county: 'Maverick',
      },
      {
        state: 'Texas',
        city: 'Las Quintas Fronterizas',
        county: 'Maverick',
      },
      {
        state: 'Texas',
        city: 'Quemado',
        county: 'Maverick',
      },
      {
        state: 'Texas',
        city: 'Radar Base',
        county: 'Maverick',
      },
      {
        state: 'Texas',
        city: 'Normandy',
        county: 'Maverick',
      },
      {
        state: 'Texas',
        city: 'El Indio',
        county: 'Maverick',
      },
      {
        state: 'Texas',
        city: 'Brady',
        county: 'McCulloch',
      },
      {
        state: 'Texas',
        city: 'Rochelle',
        county: 'McCulloch',
      },
      {
        state: 'Texas',
        city: 'Melvin',
        county: 'McCulloch',
      },
      {
        state: 'Texas',
        city: 'Waco',
        county: 'McLennan',
      },
      {
        state: 'Texas',
        city: 'Hewitt',
        county: 'McLennan',
      },
      {
        state: 'Texas',
        city: 'Robinson',
        county: 'McLennan',
      },
      {
        state: 'Texas',
        city: 'Bellmead',
        county: 'McLennan',
      },
      {
        state: 'Texas',
        city: 'Woodway',
        county: 'McLennan',
      },
      {
        state: 'Texas',
        city: 'Lacy-Lakeview',
        county: 'McLennan',
      },
      {
        state: 'Texas',
        city: 'McGregor',
        county: 'McLennan',
      },
      {
        state: 'Texas',
        city: 'West',
        county: 'McLennan',
      },
      {
        state: 'Texas',
        city: 'Beverly Hills',
        county: 'McLennan',
      },
      {
        state: 'Texas',
        city: 'Willow Grove',
        county: 'McLennan',
      },
      {
        state: 'Texas',
        city: 'Mart',
        county: 'McLennan',
      },
      {
        state: 'Texas',
        city: 'Lorena',
        county: 'McLennan',
      },
      {
        state: 'Texas',
        city: 'Bruceville-Eddy',
        county: 'McLennan',
      },
      {
        state: 'Texas',
        city: 'Riesel',
        county: 'McLennan',
      },
      {
        state: 'Texas',
        city: 'Moody',
        county: 'McLennan',
      },
      {
        state: 'Texas',
        city: 'Gholson',
        county: 'McLennan',
      },
      {
        state: 'Texas',
        city: 'China Spring',
        county: 'McLennan',
      },
      {
        state: 'Texas',
        city: 'Crawford',
        county: 'McLennan',
      },
      {
        state: 'Texas',
        city: 'Hallsburg',
        county: 'McLennan',
      },
      {
        state: 'Texas',
        city: 'Leroy',
        county: 'McLennan',
      },
      {
        state: 'Texas',
        city: 'Ross',
        county: 'McLennan',
      },
      {
        state: 'Texas',
        city: 'Tilden',
        county: 'McMullen',
      },
      {
        state: 'Texas',
        city: 'Hondo',
        county: 'Medina',
      },
      {
        state: 'Texas',
        city: 'Devine',
        county: 'Medina',
      },
      {
        state: 'Texas',
        city: 'Castroville',
        county: 'Medina',
      },
      {
        state: 'Texas',
        city: 'LaCoste',
        county: 'Medina',
      },
      {
        state: 'Texas',
        city: 'Natalia',
        county: 'Medina',
      },
      {
        state: 'Texas',
        city: "D'Hanis",
        county: 'Medina',
      },
      {
        state: 'Texas',
        city: 'Yancey',
        county: 'Medina',
      },
      {
        state: 'Texas',
        city: 'Menard',
        county: 'Menard',
      },
      {
        state: 'Texas',
        city: 'Midland',
        county: 'Midland',
      },
      {
        state: 'Texas',
        city: 'Rockdale',
        county: 'Milam',
      },
      {
        state: 'Texas',
        city: 'Cameron',
        county: 'Milam',
      },
      {
        state: 'Texas',
        city: 'Thorndale',
        county: 'Milam',
      },
      {
        state: 'Texas',
        city: 'Milano',
        county: 'Milam',
      },
      {
        state: 'Texas',
        city: 'Buckholts',
        county: 'Milam',
      },
      {
        state: 'Texas',
        city: 'Gause',
        county: 'Milam',
      },
      {
        state: 'Texas',
        city: 'Praesel',
        county: 'Milam',
      },
      {
        state: 'Texas',
        city: 'Ben Arnold',
        county: 'Milam',
      },
      {
        state: 'Texas',
        city: 'Burlington',
        county: 'Milam',
      },
      {
        state: 'Texas',
        city: 'Goldthwaite',
        county: 'Mills',
      },
      {
        state: 'Texas',
        city: 'Mullin',
        county: 'Mills',
      },
      {
        state: 'Texas',
        city: 'Priddy',
        county: 'Mills',
      },
      {
        state: 'Texas',
        city: 'Colorado city',
        county: 'Mitchell',
      },
      {
        state: 'Texas',
        city: 'Lake Colorado city',
        county: 'Mitchell',
      },
      {
        state: 'Texas',
        city: 'Loraine',
        county: 'Mitchell',
      },
      {
        state: 'Texas',
        city: 'Westbrook',
        county: 'Mitchell',
      },
      {
        state: 'Texas',
        city: 'Bowie',
        county: 'Montague',
      },
      {
        state: 'Texas',
        city: 'Nocona',
        county: 'Montague',
      },
      {
        state: 'Texas',
        city: 'St. Jo',
        county: 'Montague',
      },
      {
        state: 'Texas',
        city: 'Nocona Hills',
        county: 'Montague',
      },
      {
        state: 'Texas',
        city: 'Sunset',
        county: 'Montague',
      },
      {
        state: 'Texas',
        city: 'Montague',
        county: 'Montague',
      },
      {
        state: 'Texas',
        city: 'Ringgold',
        county: 'Montague',
      },
      {
        state: 'Texas',
        city: 'The Woodlands',
        county: 'Montgomery',
      },
      {
        state: 'Texas',
        city: 'Conroe',
        county: 'Montgomery',
      },
      {
        state: 'Texas',
        city: 'Willis',
        county: 'Montgomery',
      },
      {
        state: 'Texas',
        city: 'Pinehurst',
        county: 'Montgomery',
      },
      {
        state: 'Texas',
        city: 'Shenandoah',
        county: 'Montgomery',
      },
      {
        state: 'Texas',
        city: 'Oak Ridge North',
        county: 'Montgomery',
      },
      {
        state: 'Texas',
        city: 'Panorama Village',
        county: 'Montgomery',
      },
      {
        state: 'Texas',
        city: 'Magnolia',
        county: 'Montgomery',
      },
      {
        state: 'Texas',
        city: 'Roman Forest',
        county: 'Montgomery',
      },
      {
        state: 'Texas',
        city: 'Splendora',
        county: 'Montgomery',
      },
      {
        state: 'Texas',
        city: 'Woodbranch',
        county: 'Montgomery',
      },
      {
        state: 'Texas',
        city: 'Montgomery',
        county: 'Montgomery',
      },
      {
        state: 'Texas',
        city: 'Deerwood',
        county: 'Montgomery',
      },
      {
        state: 'Texas',
        city: 'Patton Village',
        county: 'Montgomery',
      },
      {
        state: 'Texas',
        city: 'Porter Heights',
        county: 'Montgomery',
      },
      {
        state: 'Texas',
        city: 'Cut and Shoot',
        county: 'Montgomery',
      },
      {
        state: 'Texas',
        city: 'Grangerland',
        county: 'Montgomery',
      },
      {
        state: 'Texas',
        city: 'Stagecoach',
        county: 'Montgomery',
      },
      {
        state: 'Texas',
        city: 'Woodloch',
        county: 'Montgomery',
      },
      {
        state: 'Texas',
        city: 'Dumas',
        county: 'Moore',
      },
      {
        state: 'Texas',
        city: 'Cactus',
        county: 'Moore',
      },
      {
        state: 'Texas',
        city: 'Sunray',
        county: 'Moore',
      },
      {
        state: 'Texas',
        city: 'Daingerfield',
        county: 'Morris',
      },
      {
        state: 'Texas',
        city: 'Lone Star',
        county: 'Morris',
      },
      {
        state: 'Texas',
        city: 'Naples',
        county: 'Morris',
      },
      {
        state: 'Texas',
        city: 'Omaha',
        county: 'Morris',
      },
      {
        state: 'Texas',
        city: 'Matador',
        county: 'Motley',
      },
      {
        state: 'Texas',
        city: 'Roaring Springs',
        county: 'Motley',
      },
      {
        state: 'Texas',
        city: 'Nacogdoches',
        county: 'Nacogdoches',
      },
      {
        state: 'Texas',
        city: 'Garrison',
        county: 'Nacogdoches',
      },
      {
        state: 'Texas',
        city: 'Cushing',
        county: 'Nacogdoches',
      },
      {
        state: 'Texas',
        city: 'Chireno',
        county: 'Nacogdoches',
      },
      {
        state: 'Texas',
        city: 'Appleby',
        county: 'Nacogdoches',
      },
      {
        state: 'Texas',
        city: 'Redfield',
        county: 'Nacogdoches',
      },
      {
        state: 'Texas',
        city: 'Corsicana',
        county: 'Navarro',
      },
      {
        state: 'Texas',
        city: 'Kerens',
        county: 'Navarro',
      },
      {
        state: 'Texas',
        city: 'Rice',
        county: 'Navarro',
      },
      {
        state: 'Texas',
        city: 'Dawson',
        county: 'Navarro',
      },
      {
        state: 'Texas',
        city: 'Frost',
        county: 'Navarro',
      },
      {
        state: 'Texas',
        city: 'Blooming Grove',
        county: 'Navarro',
      },
      {
        state: 'Texas',
        city: 'Retreat',
        county: 'Navarro',
      },
      {
        state: 'Texas',
        city: 'Barry',
        county: 'Navarro',
      },
      {
        state: 'Texas',
        city: 'Angus',
        county: 'Navarro',
      },
      {
        state: 'Texas',
        city: 'Oak Valley',
        county: 'Navarro',
      },
      {
        state: 'Texas',
        city: 'Goodlow',
        county: 'Navarro',
      },
      {
        state: 'Texas',
        city: 'Mildred',
        county: 'Navarro',
      },
      {
        state: 'Texas',
        city: 'Richland',
        county: 'Navarro',
      },
      {
        state: 'Texas',
        city: 'Eureka',
        county: 'Navarro',
      },
      {
        state: 'Texas',
        city: 'Emhouse',
        county: 'Navarro',
      },
      {
        state: 'Texas',
        city: 'Navarro',
        county: 'Navarro',
      },
      {
        state: 'Texas',
        city: 'Powell',
        county: 'Navarro',
      },
      {
        state: 'Texas',
        city: 'Mustang',
        county: 'Navarro',
      },
      {
        state: 'Texas',
        city: 'Newton',
        county: 'Newton',
      },
      {
        state: 'Texas',
        city: 'Deweyville',
        county: 'Newton',
      },
      {
        state: 'Texas',
        city: 'South Toledo Bend',
        county: 'Newton',
      },
      {
        state: 'Texas',
        city: 'Sweetwater',
        county: 'Nolan',
      },
      {
        state: 'Texas',
        city: 'Roscoe',
        county: 'Nolan',
      },
      {
        state: 'Texas',
        city: 'Blackwell',
        county: 'Nolan',
      },
      {
        state: 'Texas',
        city: 'Corpus Christi',
        county: 'Nueces',
      },
      {
        state: 'Texas',
        city: 'Robstown',
        county: 'Nueces',
      },
      {
        state: 'Texas',
        city: 'Aransas Pass',
        county: 'Nueces',
      },
      {
        state: 'Texas',
        city: 'Bishop',
        county: 'Nueces',
      },
      {
        state: 'Texas',
        city: 'Port Aransas',
        county: 'Nueces',
      },
      {
        state: 'Texas',
        city: 'Driscoll',
        county: 'Nueces',
      },
      {
        state: 'Texas',
        city: 'North San Pedro',
        county: 'Nueces',
      },
      {
        state: 'Texas',
        city: 'La Paloma-Lost Creek',
        county: 'Nueces',
      },
      {
        state: 'Texas',
        city: 'Sandy Hollow-Escondidas',
        county: 'Nueces',
      },
      {
        state: 'Texas',
        city: 'Rancho Banquete',
        county: 'Nueces',
      },
      {
        state: 'Texas',
        city: 'Spring Gardens',
        county: 'Nueces',
      },
      {
        state: 'Texas',
        city: 'Banquete',
        county: 'Nueces',
      },
      {
        state: 'Texas',
        city: 'Tierra Verde',
        county: 'Nueces',
      },
      {
        state: 'Texas',
        city: 'Tierra Grande',
        county: 'Nueces',
      },
      {
        state: 'Texas',
        city: 'Petronila',
        county: 'Nueces',
      },
      {
        state: 'Texas',
        city: 'Perryton',
        county: 'Ochiltree',
      },
      {
        state: 'Texas',
        city: 'Waka',
        county: 'Ochiltree',
      },
      {
        state: 'Texas',
        city: 'Farnsworth',
        county: 'Ochiltree',
      },
      {
        state: 'Texas',
        city: 'Vega',
        county: 'Oldham',
      },
      {
        state: 'Texas',
        city: 'Boys Ranch',
        county: 'Oldham',
      },
      {
        state: 'Texas',
        city: 'Wildorado',
        county: 'Oldham',
      },
      {
        state: 'Texas',
        city: 'Adrian',
        county: 'Oldham',
      },
      {
        state: 'Texas',
        city: 'Orange',
        county: 'Orange',
      },
      {
        state: 'Texas',
        city: 'Vidor',
        county: 'Orange',
      },
      {
        state: 'Texas',
        city: 'Bridge city',
        county: 'Orange',
      },
      {
        state: 'Texas',
        city: 'West Orange',
        county: 'Orange',
      },
      {
        state: 'Texas',
        city: 'Mauriceville',
        county: 'Orange',
      },
      {
        state: 'Texas',
        city: 'Little Cypress',
        county: 'Orange',
      },
      {
        state: 'Texas',
        city: 'Forest Heights',
        county: 'Orange',
      },
      {
        state: 'Texas',
        city: 'Rose city',
        county: 'Orange',
      },
      {
        state: 'Texas',
        city: 'Pine Forest',
        county: 'Orange',
      },
      {
        state: 'Texas',
        city: 'Mineral Wells',
        county: 'Palo Pinto',
      },
      {
        state: 'Texas',
        city: 'Graford',
        county: 'Palo Pinto',
      },
      {
        state: 'Texas',
        city: 'Strawn',
        county: 'Palo Pinto',
      },
      {
        state: 'Texas',
        city: 'Gordon',
        county: 'Palo Pinto',
      },
      {
        state: 'Texas',
        city: 'Santo',
        county: 'Palo Pinto',
      },
      {
        state: 'Texas',
        city: 'Mingus',
        county: 'Palo Pinto',
      },
      {
        state: 'Texas',
        city: 'Brazos',
        county: 'Palo Pinto',
      },
      {
        state: 'Texas',
        city: 'Palo Pinto',
        county: 'Palo Pinto',
      },
      {
        state: 'Texas',
        city: 'Carthage',
        county: 'Panola',
      },
      {
        state: 'Texas',
        city: 'Beckville',
        county: 'Panola',
      },
      {
        state: 'Texas',
        city: 'Gary city',
        county: 'Panola',
      },
      {
        state: 'Texas',
        city: 'Weatherford',
        county: 'Parker',
      },
      {
        state: 'Texas',
        city: 'Willow Park',
        county: 'Parker',
      },
      {
        state: 'Texas',
        city: 'Aledo',
        county: 'Parker',
      },
      {
        state: 'Texas',
        city: 'Springtown',
        county: 'Parker',
      },
      {
        state: 'Texas',
        city: 'Annetta',
        county: 'Parker',
      },
      {
        state: 'Texas',
        city: 'Hudson Oaks',
        county: 'Parker',
      },
      {
        state: 'Texas',
        city: 'Carter',
        county: 'Parker',
      },
      {
        state: 'Texas',
        city: 'Western Lake',
        county: 'Parker',
      },
      {
        state: 'Texas',
        city: 'Dennis',
        county: 'Parker',
      },
      {
        state: 'Texas',
        city: 'Annetta South',
        county: 'Parker',
      },
      {
        state: 'Texas',
        city: 'Horseshoe Bend',
        county: 'Parker',
      },
      {
        state: 'Texas',
        city: 'Annetta North',
        county: 'Parker',
      },
      {
        state: 'Texas',
        city: 'Millsap',
        county: 'Parker',
      },
      {
        state: 'Texas',
        city: 'Garner',
        county: 'Parker',
      },
      {
        state: 'Texas',
        city: 'Sanctuary',
        county: 'Parker',
      },
      {
        state: 'Texas',
        city: 'Cool',
        county: 'Parker',
      },
      {
        state: 'Texas',
        city: 'Friona',
        county: 'Parmer',
      },
      {
        state: 'Texas',
        city: 'Farwell',
        county: 'Parmer',
      },
      {
        state: 'Texas',
        city: 'Bovina',
        county: 'Parmer',
      },
      {
        state: 'Texas',
        city: 'Fort Stockton',
        county: 'Pecos',
      },
      {
        state: 'Texas',
        city: 'Iraan',
        county: 'Pecos',
      },
      {
        state: 'Texas',
        city: 'Imperial',
        county: 'Pecos',
      },
      {
        state: 'Texas',
        city: 'Coyanosa',
        county: 'Pecos',
      },
      {
        state: 'Texas',
        city: 'Sheffield',
        county: 'Pecos',
      },
      {
        state: 'Texas',
        city: 'West Livingston',
        county: 'Polk',
      },
      {
        state: 'Texas',
        city: 'Livingston',
        county: 'Polk',
      },
      {
        state: 'Texas',
        city: 'Onalaska',
        county: 'Polk',
      },
      {
        state: 'Texas',
        city: 'Corrigan',
        county: 'Polk',
      },
      {
        state: 'Texas',
        city: 'Pleasant Hill',
        county: 'Polk',
      },
      {
        state: 'Texas',
        city: 'Indian Springs',
        county: 'Polk',
      },
      {
        state: 'Texas',
        city: 'Cedar Point',
        county: 'Polk',
      },
      {
        state: 'Texas',
        city: 'Goodrich',
        county: 'Polk',
      },
      {
        state: 'Texas',
        city: 'Seven Oaks',
        county: 'Polk',
      },
      {
        state: 'Texas',
        city: 'Amarillo',
        county: 'Potter',
      },
      {
        state: 'Texas',
        city: 'Bushland',
        county: 'Potter',
      },
      {
        state: 'Texas',
        city: 'Bishop Hills',
        county: 'Potter',
      },
      {
        state: 'Texas',
        city: 'Presidio',
        county: 'Presidio',
      },
      {
        state: 'Texas',
        city: 'Marfa',
        county: 'Presidio',
      },
      {
        state: 'Texas',
        city: 'Redford',
        county: 'Presidio',
      },
      {
        state: 'Texas',
        city: 'Emory',
        county: 'Rains',
      },
      {
        state: 'Texas',
        city: 'Point',
        county: 'Rains',
      },
      {
        state: 'Texas',
        city: 'East Tawakoni',
        county: 'Rains',
      },
      {
        state: 'Texas',
        city: 'Canyon',
        county: 'Randall',
      },
      {
        state: 'Texas',
        city: 'Rockwell Place',
        county: 'Randall',
      },
      {
        state: 'Texas',
        city: 'Lake Tanglewood',
        county: 'Randall',
      },
      {
        state: 'Texas',
        city: 'Timbercreek Canyon',
        county: 'Randall',
      },
      {
        state: 'Texas',
        city: 'Palisades',
        county: 'Randall',
      },
      {
        state: 'Texas',
        city: 'Umbarger',
        county: 'Randall',
      },
      {
        state: 'Texas',
        city: 'Big Lake',
        county: 'Reagan',
      },
      {
        state: 'Texas',
        city: 'Camp Wood',
        county: 'Real',
      },
      {
        state: 'Texas',
        city: 'Leakey',
        county: 'Real',
      },
      {
        state: 'Texas',
        city: 'Clarksville',
        county: 'Red River',
      },
      {
        state: 'Texas',
        city: 'Bogata',
        county: 'Red River',
      },
      {
        state: 'Texas',
        city: 'Avery',
        county: 'Red River',
      },
      {
        state: 'Texas',
        city: 'Detroit',
        county: 'Red River',
      },
      {
        state: 'Texas',
        city: 'Annona',
        county: 'Red River',
      },
      {
        state: 'Texas',
        city: 'Pecos',
        county: 'Reeves',
      },
      {
        state: 'Texas',
        city: 'Balmorhea',
        county: 'Reeves',
      },
      {
        state: 'Texas',
        city: 'Toyah',
        county: 'Reeves',
      },
      {
        state: 'Texas',
        city: 'Refugio',
        county: 'Refugio',
      },
      {
        state: 'Texas',
        city: 'Woodsboro',
        county: 'Refugio',
      },
      {
        state: 'Texas',
        city: 'Tivoli',
        county: 'Refugio',
      },
      {
        state: 'Texas',
        city: 'Bayside',
        county: 'Refugio',
      },
      {
        state: 'Texas',
        city: 'Austwell',
        county: 'Refugio',
      },
      {
        state: 'Texas',
        city: 'Miami',
        county: 'Roberts',
      },
      {
        state: 'Texas',
        city: 'Hearne',
        county: 'Robertson',
      },
      {
        state: 'Texas',
        city: 'Franklin',
        county: 'Robertson',
      },
      {
        state: 'Texas',
        city: 'Calvert',
        county: 'Robertson',
      },
      {
        state: 'Texas',
        city: 'Bremond',
        county: 'Robertson',
      },
      {
        state: 'Texas',
        city: 'Rockwall',
        county: 'Rockwall',
      },
      {
        state: 'Texas',
        city: 'Fate',
        county: 'Rockwall',
      },
      {
        state: 'Texas',
        city: 'Royse city',
        county: 'Rockwall',
      },
      {
        state: 'Texas',
        city: 'Heath',
        county: 'Rockwall',
      },
      {
        state: 'Texas',
        city: 'McLendon-Chisholm',
        county: 'Rockwall',
      },
      {
        state: 'Texas',
        city: 'Mobile city',
        county: 'Rockwall',
      },
      {
        state: 'Texas',
        city: 'Ballinger',
        county: 'Runnels',
      },
      {
        state: 'Texas',
        city: 'Winters',
        county: 'Runnels',
      },
      {
        state: 'Texas',
        city: 'Miles',
        county: 'Runnels',
      },
      {
        state: 'Texas',
        city: 'Rowena',
        county: 'Runnels',
      },
      {
        state: 'Texas',
        city: 'Wingate',
        county: 'Runnels',
      },
      {
        state: 'Texas',
        city: 'Henderson',
        county: 'Rusk',
      },
      {
        state: 'Texas',
        city: 'Lake Cherokee',
        county: 'Rusk',
      },
      {
        state: 'Texas',
        city: 'Overton',
        county: 'Rusk',
      },
      {
        state: 'Texas',
        city: 'Tatum',
        county: 'Rusk',
      },
      {
        state: 'Texas',
        city: 'New London',
        county: 'Rusk',
      },
      {
        state: 'Texas',
        city: 'Reklaw',
        county: 'Rusk',
      },
      {
        state: 'Texas',
        city: 'Mount Enterprise',
        county: 'Rusk',
      },
      {
        state: 'Texas',
        city: 'Milam',
        county: 'Sabine',
      },
      {
        state: 'Texas',
        city: 'Hemphill',
        county: 'Sabine',
      },
      {
        state: 'Texas',
        city: 'Pineland',
        county: 'Sabine',
      },
      {
        state: 'Texas',
        city: 'San Augustine',
        county: 'San Augustine',
      },
      {
        state: 'Texas',
        city: 'Broaddus',
        county: 'San Augustine',
      },
      {
        state: 'Texas',
        city: 'Shepherd',
        county: 'San Jacinto',
      },
      {
        state: 'Texas',
        city: 'Coldspring',
        county: 'San Jacinto',
      },
      {
        state: 'Texas',
        city: 'Point Blank',
        county: 'San Jacinto',
      },
      {
        state: 'Texas',
        city: 'Cape Royale',
        county: 'San Jacinto',
      },
      {
        state: 'Texas',
        city: 'Oakhurst',
        county: 'San Jacinto',
      },
      {
        state: 'Texas',
        city: 'Portland',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'Ingleside',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'Sinton',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'Mathis',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'Taft',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'Gregory',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'Odem',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'Taft Southwest',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'Ingleside on the Bay',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'Lake city',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'San Patricio',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'Morgan Farm',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'Lakeshore Gardens-Hidden Acres',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'Rancho Chico',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'La Paloma Addition',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'Edroy',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'Tradewinds',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'Del Sol',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'Country Acres',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'Edgewater Estates',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'Loma Linda',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'Paisano Park',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'Falman',
        county: 'San Patricio',
      },
      {
        state: 'Texas',
        city: 'San Saba',
        county: 'San Saba',
      },
      {
        state: 'Texas',
        city: 'Richland Springs',
        county: 'San Saba',
      },
      {
        state: 'Texas',
        city: 'Eldorado',
        county: 'Schleicher',
      },
      {
        state: 'Texas',
        city: 'Snyder',
        county: 'Scurry',
      },
      {
        state: 'Texas',
        city: 'Hermleigh',
        county: 'Scurry',
      },
      {
        state: 'Texas',
        city: 'Fluvanna',
        county: 'Scurry',
      },
      {
        state: 'Texas',
        city: 'Albany',
        county: 'Shackelford',
      },
      {
        state: 'Texas',
        city: 'Moran',
        county: 'Shackelford',
      },
      {
        state: 'Texas',
        city: 'Center',
        county: 'Shelby',
      },
      {
        state: 'Texas',
        city: 'Tenaha',
        county: 'Shelby',
      },
      {
        state: 'Texas',
        city: 'Timpson',
        county: 'Shelby',
      },
      {
        state: 'Texas',
        city: 'Joaquin',
        county: 'Shelby',
      },
      {
        state: 'Texas',
        city: 'Huxley',
        county: 'Shelby',
      },
      {
        state: 'Texas',
        city: 'Shelbyville',
        county: 'Shelby',
      },
      {
        state: 'Texas',
        city: 'Stratford',
        county: 'Sherman',
      },
      {
        state: 'Texas',
        city: 'Texhoma',
        county: 'Sherman',
      },
      {
        state: 'Texas',
        city: 'Tyler',
        county: 'Smith',
      },
      {
        state: 'Texas',
        city: 'Whitehouse',
        county: 'Smith',
      },
      {
        state: 'Texas',
        city: 'Lindale',
        county: 'Smith',
      },
      {
        state: 'Texas',
        city: 'Bullard',
        county: 'Smith',
      },
      {
        state: 'Texas',
        city: 'Hideaway',
        county: 'Smith',
      },
      {
        state: 'Texas',
        city: 'Troup',
        county: 'Smith',
      },
      {
        state: 'Texas',
        city: 'Arp',
        county: 'Smith',
      },
      {
        state: 'Texas',
        city: 'Emerald Bay',
        county: 'Smith',
      },
      {
        state: 'Texas',
        city: 'New Chapel Hill',
        county: 'Smith',
      },
      {
        state: 'Texas',
        city: 'Winona',
        county: 'Smith',
      },
      {
        state: 'Texas',
        city: 'Noonday',
        county: 'Smith',
      },
      {
        state: 'Texas',
        city: 'Glen Rose',
        county: 'Somervell',
      },
      {
        state: 'Texas',
        city: 'Rio Grande city',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Roma',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Escobares',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Las Lomas',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'La Grulla',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Mikes',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Mi Ranchito Estate',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'El Refugio',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Valle Vista',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'La Puerta',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Los Ebanos',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Nina',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Garza-Salinas II',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Olivia Lopez de Gutierrez',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'East Alto Bonito',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Santa Cruz',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'West Alto Bonito',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Los Barreras',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Alto Bonito Heights',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Ranchitos del Norte',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Pablo Pena',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Garceno',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'El Chaparral',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Olmito and Olmito',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Barrera',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'J.F. Villareal',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Camargito',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Manuel Garcia',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'El Rancho Vela',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Eugenio Saenz',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Fronton',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'La Escondida',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'E. Lopez',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Los Alvarez',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'La Victoria',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'San Isidro',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'B and E',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Campo Verde',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'North Escobares',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Fronton Ranchettes',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Chaparrito',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'El Quiote',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Airport Heights',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Miguel Barrera',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Delmita',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Sammy Martinez',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Benjamin Perez',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Saline��o North',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'El Castillo',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'La Rosita',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Loma Linda West',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Pena',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'H. Cuellar Estates',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'La Carla',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'La Minita',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Buena Vista',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Saline��o',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'La Esperanza',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Garciasville',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Longoria',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Quesada',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Ramos',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Guadalupe Guerra',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Palo Blanco',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'El Brazil',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Loma Vista',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Evergreen',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Victoria Vera',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'La Paloma Ranchettes',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Fernando Salinas',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Regino Ramirez',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Falconaire',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Villarreal',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'El Socio',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Chapeno',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Santel',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Gutierrez',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Tierra Dorada',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Valle Hermoso',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Manuel Garcia II',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'La Loma de Falcon',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'La Casita',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Loma Linda East',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Flor del Rio',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Anacua',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Jardin de San Julian',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Indio',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'La Chuparosa',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Zarate',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Sandoval',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Rafael Pena',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Martinez',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Moraida',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Netos',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Amada Acres',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'San Fernando',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Casas',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Casa Blanca',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Rivereno',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Ramirez-Perez',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Elias-Fela Solis',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Los Arrieros',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Falcon Heights',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'El Mesquite',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Narciso Pena',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Falcon Village',
        county: 'Starr',
      },
      {
        state: 'Texas',
        city: 'Breckenridge',
        county: 'Stephens',
      },
      {
        state: 'Texas',
        city: 'Sterling city',
        county: 'Sterling',
      },
      {
        state: 'Texas',
        city: 'Aspermont',
        county: 'Stonewall',
      },
      {
        state: 'Texas',
        city: 'Sonora',
        county: 'Sutton',
      },
      {
        state: 'Texas',
        city: 'Tulia',
        county: 'Swisher',
      },
      {
        state: 'Texas',
        city: 'Kress',
        county: 'Swisher',
      },
      {
        state: 'Texas',
        city: 'Happy',
        county: 'Swisher',
      },
      {
        state: 'Texas',
        city: 'Fort Worth',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Arlington',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Mansfield',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'North Richland Hills',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Euless',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Grapevine',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Bedford',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Haltom city',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Keller',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Hurst',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Southlake',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Colleyville',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Benbrook',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Saginaw',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Watauga',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'White Settlement',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Crowley',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Rendon',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Forest Hill',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Azle',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Richland Hills',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Kennedale',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'River Oaks',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Everman',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Sansom Park',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Lake Worth',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Pecan Acres',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Edgecliff Village',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Westworth Village',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Pantego',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Dalworthington Gardens',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Haslet',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Blue Mound',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Pelican Bay',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Lakeside',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Westlake',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Westover Hills',
        county: 'Tarrant',
      },
      {
        state: 'Texas',
        city: 'Abilene',
        county: 'Taylor',
      },
      {
        state: 'Texas',
        city: 'Potosi',
        county: 'Taylor',
      },
      {
        state: 'Texas',
        city: 'Merkel',
        county: 'Taylor',
      },
      {
        state: 'Texas',
        city: 'Tye',
        county: 'Taylor',
      },
      {
        state: 'Texas',
        city: 'Tuscola',
        county: 'Taylor',
      },
      {
        state: 'Texas',
        city: 'Buffalo Gap',
        county: 'Taylor',
      },
      {
        state: 'Texas',
        city: 'Lawn',
        county: 'Taylor',
      },
      {
        state: 'Texas',
        city: 'Trent',
        county: 'Taylor',
      },
      {
        state: 'Texas',
        city: 'Impact',
        county: 'Taylor',
      },
      {
        state: 'Texas',
        city: 'Sanderson',
        county: 'Terrell',
      },
      {
        state: 'Texas',
        city: 'Brownfield',
        county: 'Terry',
      },
      {
        state: 'Texas',
        city: 'Meadow',
        county: 'Terry',
      },
      {
        state: 'Texas',
        city: 'Wellman',
        county: 'Terry',
      },
      {
        state: 'Texas',
        city: 'Throckmorton',
        county: 'Throckmorton',
      },
      {
        state: 'Texas',
        city: 'Woodson',
        county: 'Throckmorton',
      },
      {
        state: 'Texas',
        city: 'Elbert',
        county: 'Throckmorton',
      },
      {
        state: 'Texas',
        city: 'Mount Pleasant',
        county: 'Titus',
      },
      {
        state: 'Texas',
        city: 'Talco',
        county: 'Titus',
      },
      {
        state: 'Texas',
        city: 'Winfield',
        county: 'Titus',
      },
      {
        state: 'Texas',
        city: "Miller's Cove",
        county: 'Titus',
      },
      {
        state: 'Texas',
        city: 'San Angelo',
        county: 'Tom Green',
      },
      {
        state: 'Texas',
        city: 'Grape Creek',
        county: 'Tom Green',
      },
      {
        state: 'Texas',
        city: 'Carlsbad',
        county: 'Tom Green',
      },
      {
        state: 'Texas',
        city: 'Christoval',
        county: 'Tom Green',
      },
      {
        state: 'Texas',
        city: 'Austin',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Pflugerville',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Lakeway',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Steiner Ranch',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Manor',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Wells Branch',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Hornsby Bend',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Lago Vista',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Bee Cave',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Shady Hollow',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'West Lake Hills',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Barton Creek',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Hudson Bend',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Garfield',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'The Hills',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Jonestown',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Briarcliff',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Manchaca',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Point Venture',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Rollingwood',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Mustang Ridge',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Volente',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Sunset Valley',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'San Leanna',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Webberville',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Creedmoor',
        county: 'Travis',
      },
      {
        state: 'Texas',
        city: 'Trinity',
        county: 'Trinity',
      },
      {
        state: 'Texas',
        city: 'Westwood Shores',
        county: 'Trinity',
      },
      {
        state: 'Texas',
        city: 'Groveton',
        county: 'Trinity',
      },
      {
        state: 'Texas',
        city: 'Woodville',
        county: 'Tyler',
      },
      {
        state: 'Texas',
        city: 'Ivanhoe',
        county: 'Tyler',
      },
      {
        state: 'Texas',
        city: 'Warren',
        county: 'Tyler',
      },
      {
        state: 'Texas',
        city: 'Colmesneil',
        county: 'Tyler',
      },
      {
        state: 'Texas',
        city: 'Chester',
        county: 'Tyler',
      },
      {
        state: 'Texas',
        city: 'Gilmer',
        county: 'Upshur',
      },
      {
        state: 'Texas',
        city: 'Big Sandy',
        county: 'Upshur',
      },
      {
        state: 'Texas',
        city: 'Ore city',
        county: 'Upshur',
      },
      {
        state: 'Texas',
        city: 'East Mountain',
        county: 'Upshur',
      },
      {
        state: 'Texas',
        city: 'Union Grove',
        county: 'Upshur',
      },
      {
        state: 'Texas',
        city: 'McCamey',
        county: 'Upton',
      },
      {
        state: 'Texas',
        city: 'Rankin',
        county: 'Upton',
      },
      {
        state: 'Texas',
        city: 'Uvalde',
        county: 'Uvalde',
      },
      {
        state: 'Texas',
        city: 'Uvalde Estates',
        county: 'Uvalde',
      },
      {
        state: 'Texas',
        city: 'Knippa',
        county: 'Uvalde',
      },
      {
        state: 'Texas',
        city: 'Sabinal',
        county: 'Uvalde',
      },
      {
        state: 'Texas',
        city: 'Utopia',
        county: 'Uvalde',
      },
      {
        state: 'Texas',
        city: 'Del Rio',
        county: 'Val Verde',
      },
      {
        state: 'Texas',
        city: 'Val Verde Park',
        county: 'Val Verde',
      },
      {
        state: 'Texas',
        city: 'Cienegas Terrace',
        county: 'Val Verde',
      },
      {
        state: 'Texas',
        city: 'Laughlin AFB',
        county: 'Val Verde',
      },
      {
        state: 'Texas',
        city: 'Lake View',
        county: 'Val Verde',
      },
      {
        state: 'Texas',
        city: 'Box Canyon',
        county: 'Val Verde',
      },
      {
        state: 'Texas',
        city: 'Amistad',
        county: 'Val Verde',
      },
      {
        state: 'Texas',
        city: 'Canton',
        county: 'Van Zandt',
      },
      {
        state: 'Texas',
        city: 'Wills Point',
        county: 'Van Zandt',
      },
      {
        state: 'Texas',
        city: 'Grand Saline',
        county: 'Van Zandt',
      },
      {
        state: 'Texas',
        city: 'Van',
        county: 'Van Zandt',
      },
      {
        state: 'Texas',
        city: 'Ben Wheeler',
        county: 'Van Zandt',
      },
      {
        state: 'Texas',
        city: 'Edgewood',
        county: 'Van Zandt',
      },
      {
        state: 'Texas',
        city: 'Callender Lake',
        county: 'Van Zandt',
      },
      {
        state: 'Texas',
        city: 'Fruitvale',
        county: 'Van Zandt',
      },
      {
        state: 'Texas',
        city: 'Myrtle Springs',
        county: 'Van Zandt',
      },
      {
        state: 'Texas',
        city: 'Edom',
        county: 'Van Zandt',
      },
      {
        state: 'Texas',
        city: 'Victoria',
        county: 'Victoria',
      },
      {
        state: 'Texas',
        city: 'Inez',
        county: 'Victoria',
      },
      {
        state: 'Texas',
        city: 'Quail Creek',
        county: 'Victoria',
      },
      {
        state: 'Texas',
        city: 'Bloomington',
        county: 'Victoria',
      },
      {
        state: 'Texas',
        city: 'Placedo',
        county: 'Victoria',
      },
      {
        state: 'Texas',
        city: 'Huntsville',
        county: 'Walker',
      },
      {
        state: 'Texas',
        city: 'New Waverly',
        county: 'Walker',
      },
      {
        state: 'Texas',
        city: 'Riverside',
        county: 'Walker',
      },
      {
        state: 'Texas',
        city: 'Prairie View',
        county: 'Waller',
      },
      {
        state: 'Texas',
        city: 'Hempstead',
        county: 'Waller',
      },
      {
        state: 'Texas',
        city: 'Brookshire',
        county: 'Waller',
      },
      {
        state: 'Texas',
        city: 'Waller',
        county: 'Waller',
      },
      {
        state: 'Texas',
        city: 'Pine Island',
        county: 'Waller',
      },
      {
        state: 'Texas',
        city: 'Pattison',
        county: 'Waller',
      },
      {
        state: 'Texas',
        city: 'Monahans',
        county: 'Ward',
      },
      {
        state: 'Texas',
        city: 'Southwest Sandhill',
        county: 'Ward',
      },
      {
        state: 'Texas',
        city: 'Wickett',
        county: 'Ward',
      },
      {
        state: 'Texas',
        city: 'Thorntonville',
        county: 'Ward',
      },
      {
        state: 'Texas',
        city: 'Grandfalls',
        county: 'Ward',
      },
      {
        state: 'Texas',
        city: 'Barstow',
        county: 'Ward',
      },
      {
        state: 'Texas',
        city: 'Pyote',
        county: 'Ward',
      },
      {
        state: 'Texas',
        city: 'Brenham',
        county: 'Washington',
      },
      {
        state: 'Texas',
        city: 'Burton',
        county: 'Washington',
      },
      {
        state: 'Texas',
        city: 'Laredo',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Rio Bravo',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'El Cenizo',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Pueblo Nuevo',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Ranchos Penitas West',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Bruni',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Ranchitos Las Lomas',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Ranchitos East',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'San Carlos II',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'San Carlos I',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'La Presa',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Tanquecitos South Acres',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Mirando city',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Los Altos',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Oilton',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Colorado Acres',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Bonanza Hills',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'La Moca Ranch',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Los Veteranos I',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Los Huisaches',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Los Arcos',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'La Coma',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Los Veteranos II',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Sunset Acres',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Botines',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Hillside Acres',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Aguilares',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Tanquecitos South Acres II',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Laredo Ranchettes West',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Las Haciendas',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Las Pilas',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Los Minerales',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Laredo Ranchettes',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Los Nopalitos',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Four Points',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Pueblo East',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Los Corralitos',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'Valle Verde',
        county: 'Webb',
      },
      {
        state: 'Texas',
        city: 'El Campo',
        county: 'Wharton',
      },
      {
        state: 'Texas',
        city: 'Wharton',
        county: 'Wharton',
      },
      {
        state: 'Texas',
        city: 'East Bernard',
        county: 'Wharton',
      },
      {
        state: 'Texas',
        city: 'Boling',
        county: 'Wharton',
      },
      {
        state: 'Texas',
        city: 'Louise',
        county: 'Wharton',
      },
      {
        state: 'Texas',
        city: 'Hungerford',
        county: 'Wharton',
      },
      {
        state: 'Texas',
        city: 'Iago',
        county: 'Wharton',
      },
      {
        state: 'Texas',
        city: 'Shamrock',
        county: 'Wheeler',
      },
      {
        state: 'Texas',
        city: 'Wheeler',
        county: 'Wheeler',
      },
      {
        state: 'Texas',
        city: 'Allison',
        county: 'Wheeler',
      },
      {
        state: 'Texas',
        city: 'Mobeetie',
        county: 'Wheeler',
      },
      {
        state: 'Texas',
        city: 'Wichita Falls',
        county: 'Wichita',
      },
      {
        state: 'Texas',
        city: 'Burkburnett',
        county: 'Wichita',
      },
      {
        state: 'Texas',
        city: 'Iowa Park',
        county: 'Wichita',
      },
      {
        state: 'Texas',
        city: 'Electra',
        county: 'Wichita',
      },
      {
        state: 'Texas',
        city: 'Pleasant Valley',
        county: 'Wichita',
      },
      {
        state: 'Texas',
        city: 'Cashion Community',
        county: 'Wichita',
      },
      {
        state: 'Texas',
        city: 'Vernon',
        county: 'Wilbarger',
      },
      {
        state: 'Texas',
        city: 'Lockett',
        county: 'Wilbarger',
      },
      {
        state: 'Texas',
        city: 'Harrold',
        county: 'Wilbarger',
      },
      {
        state: 'Texas',
        city: 'Oklaunion',
        county: 'Wilbarger',
      },
      {
        state: 'Texas',
        city: 'Raymondville',
        county: 'Willacy',
      },
      {
        state: 'Texas',
        city: 'Lyford',
        county: 'Willacy',
      },
      {
        state: 'Texas',
        city: 'Sebastian',
        county: 'Willacy',
      },
      {
        state: 'Texas',
        city: 'Lasara',
        county: 'Willacy',
      },
      {
        state: 'Texas',
        city: 'San Perlita',
        county: 'Willacy',
      },
      {
        state: 'Texas',
        city: 'Los Angeles',
        county: 'Willacy',
      },
      {
        state: 'Texas',
        city: 'Zapata Ranch',
        county: 'Willacy',
      },
      {
        state: 'Texas',
        city: 'Ranchette Estates',
        county: 'Willacy',
      },
      {
        state: 'Texas',
        city: 'Port Mansfield',
        county: 'Willacy',
      },
      {
        state: 'Texas',
        city: 'Santa Monica',
        county: 'Willacy',
      },
      {
        state: 'Texas',
        city: 'Round Rock',
        county: 'Williamson',
      },
      {
        state: 'Texas',
        city: 'Cedar Park',
        county: 'Williamson',
      },
      {
        state: 'Texas',
        city: 'Georgetown',
        county: 'Williamson',
      },
      {
        state: 'Texas',
        city: 'Leander',
        county: 'Williamson',
      },
      {
        state: 'Texas',
        city: 'Hutto',
        county: 'Williamson',
      },
      {
        state: 'Texas',
        city: 'Brushy Creek',
        county: 'Williamson',
      },
      {
        state: 'Texas',
        city: 'Taylor',
        county: 'Williamson',
      },
      {
        state: 'Texas',
        city: 'Sonterra',
        county: 'Williamson',
      },
      {
        state: 'Texas',
        city: 'Liberty Hill',
        county: 'Williamson',
      },
      {
        state: 'Texas',
        city: 'Santa Rita Ranch',
        county: 'Williamson',
      },
      {
        state: 'Texas',
        city: 'Jarrell',
        county: 'Williamson',
      },
      {
        state: 'Texas',
        city: 'Bartlett',
        county: 'Williamson',
      },
      {
        state: 'Texas',
        city: 'Serenada',
        county: 'Williamson',
      },
      {
        state: 'Texas',
        city: 'Granger',
        county: 'Williamson',
      },
      {
        state: 'Texas',
        city: 'Florence',
        county: 'Williamson',
      },
      {
        state: 'Texas',
        city: 'Thrall',
        county: 'Williamson',
      },
      {
        state: 'Texas',
        city: 'Coupland',
        county: 'Williamson',
      },
      {
        state: 'Texas',
        city: 'Weir',
        county: 'Williamson',
      },
      {
        state: 'Texas',
        city: 'Floresville',
        county: 'Wilson',
      },
      {
        state: 'Texas',
        city: 'Poth',
        county: 'Wilson',
      },
      {
        state: 'Texas',
        city: 'Stockdale',
        county: 'Wilson',
      },
      {
        state: 'Texas',
        city: 'La Vernia',
        county: 'Wilson',
      },
      {
        state: 'Texas',
        city: 'Kermit',
        county: 'Winkler',
      },
      {
        state: 'Texas',
        city: 'Wink',
        county: 'Winkler',
      },
      {
        state: 'Texas',
        city: 'Decatur',
        county: 'Wise',
      },
      {
        state: 'Texas',
        city: 'Bridgeport',
        county: 'Wise',
      },
      {
        state: 'Texas',
        city: 'Briar',
        county: 'Wise',
      },
      {
        state: 'Texas',
        city: 'Rhome',
        county: 'Wise',
      },
      {
        state: 'Texas',
        city: 'Runaway Bay',
        county: 'Wise',
      },
      {
        state: 'Texas',
        city: 'Boyd',
        county: 'Wise',
      },
      {
        state: 'Texas',
        city: 'New Fairview',
        county: 'Wise',
      },
      {
        state: 'Texas',
        city: 'Aurora',
        county: 'Wise',
      },
      {
        state: 'Texas',
        city: 'Chico',
        county: 'Wise',
      },
      {
        state: 'Texas',
        city: 'Alvord',
        county: 'Wise',
      },
      {
        state: 'Texas',
        city: 'Newark',
        county: 'Wise',
      },
      {
        state: 'Texas',
        city: 'Paradise',
        county: 'Wise',
      },
      {
        state: 'Texas',
        city: 'Lake Bridgeport',
        county: 'Wise',
      },
      {
        state: 'Texas',
        city: 'Mineola',
        county: 'Wood',
      },
      {
        state: 'Texas',
        city: 'Winnsboro',
        county: 'Wood',
      },
      {
        state: 'Texas',
        city: 'Holly Lake Ranch',
        county: 'Wood',
      },
      {
        state: 'Texas',
        city: 'Quitman',
        county: 'Wood',
      },
      {
        state: 'Texas',
        city: 'Hawkins',
        county: 'Wood',
      },
      {
        state: 'Texas',
        city: 'Alba',
        county: 'Wood',
      },
      {
        state: 'Texas',
        city: 'Yantis',
        county: 'Wood',
      },
      {
        state: 'Texas',
        city: 'Denver city',
        county: 'Yoakum',
      },
      {
        state: 'Texas',
        city: 'Plains',
        county: 'Yoakum',
      },
      {
        state: 'Texas',
        city: 'Graham',
        county: 'Young',
      },
      {
        state: 'Texas',
        city: 'Olney',
        county: 'Young',
      },
      {
        state: 'Texas',
        city: 'Newcastle',
        county: 'Young',
      },
      {
        state: 'Texas',
        city: 'Loving',
        county: 'Young',
      },
      {
        state: 'Texas',
        city: 'Medina',
        county: 'Zapata',
      },
      {
        state: 'Texas',
        city: 'Zapata',
        county: 'Zapata',
      },
      {
        state: 'Texas',
        city: 'Siesta Shores',
        county: 'Zapata',
      },
      {
        state: 'Texas',
        city: 'Falcon Lake Estates',
        county: 'Zapata',
      },
      {
        state: 'Texas',
        city: 'San Ygnacio',
        county: 'Zapata',
      },
      {
        state: 'Texas',
        city: 'Falcon Mesa',
        county: 'Zapata',
      },
      {
        state: 'Texas',
        city: 'Las Palmas',
        county: 'Zapata',
      },
      {
        state: 'Texas',
        city: 'Lope��o',
        county: 'Zapata',
      },
      {
        state: 'Texas',
        city: 'Morales-Sanchez',
        county: 'Zapata',
      },
      {
        state: 'Texas',
        city: 'Los Lobos',
        county: 'Zapata',
      },
      {
        state: 'Texas',
        city: 'New Falcon',
        county: 'Zapata',
      },
      {
        state: 'Texas',
        city: 'Ramireno',
        county: 'Zapata',
      },
      {
        state: 'Texas',
        city: 'Crystal city',
        county: 'Zavala',
      },
      {
        state: 'Texas',
        city: 'Batesville',
        county: 'Zavala',
      },
      {
        state: 'Texas',
        city: 'La Pryor',
        county: 'Zavala',
      },
      {
        state: 'Texas',
        city: 'Chula Vista',
        county: 'Zavala',
      },
      {
        state: 'Texas',
        city: 'Loma Grande',
        county: 'Zavala',
      },
      {
        state: 'Texas',
        city: 'Amaya',
        county: 'Zavala',
      },
      {
        state: 'Texas',
        city: 'Cypress',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Hockley',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Saint Hedwig',
        county: 'Bexar',
      },
      {
        state: 'Texas',
        city: 'Klein',
        county: 'Harris',
      },
      {
        state: 'Texas',
        city: 'Ricardson',
        county: 'Collin',
      },
      {
        state: 'Texas',
        city: 'Pattonville',
        county: 'Lamar',
      },
      {
        state: 'Texas',
        city: 'Sumner',
        county: 'Lamar',
      },
      {
        state: 'Texas',
        city: 'Purley',
        county: 'Franklin',
      },
      {
        state: 'Texas',
        city: 'Gordonville',
        county: 'Grayson',
      },
      {
        state: 'Texas',
        city: 'Greenvile',
        county: 'Hunt',
      },
      {
        state: 'Texas',
        city: 'Porter',
        county: 'Montgomery',
      },
      {
        state: 'Texas',
        city: 'Rosston',
        county: 'Cooke',
      },
      {
        state: 'Texas',
        city: 'New Caney',
        county: 'Montgomery',
      },
      {
        state: '',
        city: '',
        county: '',
      },
      {
        state: 'Illinois',
        city: 'Payson',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Camp Point',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Mendon',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Golden',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Clayton',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Ursa',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Liberty',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Loraine',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Plainville',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Coatsburg',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Lima',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Paloma',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Bloomfield',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Kingston',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Columbus',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Beverly',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Fowler',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Marcelline',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'La Prairie',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Adams',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Fall Creek',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Meyer',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Burton',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Richfield',
        county: 'Adams',
      },
      {
        state: 'Illinois',
        city: 'Cairo',
        county: 'Alexander',
      },
      {
        state: 'Illinois',
        city: 'Tamms',
        county: 'Alexander',
      },
      {
        state: 'Illinois',
        city: 'Olive Branch',
        county: 'Alexander',
      },
      {
        state: 'Illinois',
        city: 'Thebes',
        county: 'Alexander',
      },
      {
        state: 'Illinois',
        city: 'East Cape Girardeau',
        county: 'Alexander',
      },
      {
        state: 'Illinois',
        city: 'McClure',
        county: 'Alexander',
      },
      {
        state: 'Illinois',
        city: 'Unity',
        county: 'Alexander',
      },
      {
        state: 'Illinois',
        city: 'Greenville',
        county: 'Bond',
      },
      {
        state: 'Illinois',
        city: 'Pocahontas',
        county: 'Bond',
      },
      {
        state: 'Illinois',
        city: 'Mulberry Grove',
        county: 'Bond',
      },
      {
        state: 'Illinois',
        city: 'Keyesport',
        county: 'Bond',
      },
      {
        state: 'Illinois',
        city: 'Sorento',
        county: 'Bond',
      },
      {
        state: 'Illinois',
        city: 'Pierron',
        county: 'Bond',
      },
      {
        state: 'Illinois',
        city: 'Smithboro',
        county: 'Bond',
      },
      {
        state: 'Illinois',
        city: 'Old Ripley',
        county: 'Bond',
      },
      {
        state: 'Illinois',
        city: 'Belvidere',
        county: 'Boone',
      },
      {
        state: 'Illinois',
        city: 'Candlewick Lake',
        county: 'Boone',
      },
      {
        state: 'Illinois',
        city: 'Poplar Grove',
        county: 'Boone',
      },
      {
        state: 'Illinois',
        city: 'Capron',
        county: 'Boone',
      },
      {
        state: 'Illinois',
        city: 'Timberlane',
        county: 'Boone',
      },
      {
        state: 'Illinois',
        city: 'Garden Prairie',
        county: 'Boone',
      },
      {
        state: 'Illinois',
        city: 'Argyle',
        county: 'Boone',
      },
      {
        state: 'Illinois',
        city: 'Caledonia',
        county: 'Boone',
      },
      {
        state: 'Illinois',
        city: 'Mount Sterling',
        county: 'Brown',
      },
      {
        state: 'Illinois',
        city: 'Versailles',
        county: 'Brown',
      },
      {
        state: 'Illinois',
        city: 'Mound Station',
        county: 'Brown',
      },
      {
        state: 'Illinois',
        city: 'Ripley',
        county: 'Brown',
      },
      {
        state: 'Illinois',
        city: 'Princeton',
        county: 'Bureau',
      },
      {
        state: 'Illinois',
        city: 'Spring Valley',
        county: 'Bureau',
      },
      {
        state: 'Illinois',
        city: 'De Pue',
        county: 'Bureau',
      },
      {
        state: 'Illinois',
        city: 'Ladd',
        county: 'Bureau',
      },
      {
        state: 'Illinois',
        city: 'Walnut',
        county: 'Bureau',
      },
      {
        state: 'Illinois',
        city: 'Wyanet',
        county: 'Bureau',
      },
      {
        state: 'Illinois',
        city: 'Sheffield',
        county: 'Bureau',
      },
      {
        state: 'Illinois',
        city: 'La Moille',
        county: 'Bureau',
      },
      {
        state: 'Illinois',
        city: 'Tiskilwa',
        county: 'Bureau',
      },
      {
        state: 'Illinois',
        city: 'Dalzell',
        county: 'Bureau',
      },
      {
        state: 'Illinois',
        city: 'Ohio',
        county: 'Bureau',
      },
      {
        state: 'Illinois',
        city: 'Buda',
        county: 'Bureau',
      },
      {
        state: 'Illinois',
        city: 'Cherry',
        county: 'Bureau',
      },
      {
        state: 'Illinois',
        city: 'Malden',
        county: 'Bureau',
      },
      {
        state: 'Illinois',
        city: 'Seatonville',
        county: 'Bureau',
      },
      {
        state: 'Illinois',
        city: 'Neponset',
        county: 'Bureau',
      },
      {
        state: 'Illinois',
        city: 'Manlius',
        county: 'Bureau',
      },
      {
        state: 'Illinois',
        city: 'Mineral',
        county: 'Bureau',
      },
      {
        state: 'Illinois',
        city: 'Arlington',
        county: 'Bureau',
      },
      {
        state: 'Illinois',
        city: 'Dover',
        county: 'Bureau',
      },
      {
        state: 'Illinois',
        city: 'New Bedford',
        county: 'Bureau',
      },
      {
        state: 'Illinois',
        city: 'Hollowayville',
        county: 'Bureau',
      },
      {
        state: 'Illinois',
        city: 'Hardin',
        county: 'Calhoun',
      },
      {
        state: 'Illinois',
        city: 'Batchtown',
        county: 'Calhoun',
      },
      {
        state: 'Illinois',
        city: 'Kampsville',
        county: 'Calhoun',
      },
      {
        state: 'Illinois',
        city: 'Hamburg',
        county: 'Calhoun',
      },
      {
        state: 'Illinois',
        city: 'Brussels',
        county: 'Calhoun',
      },
      {
        state: 'Illinois',
        city: 'Savanna',
        county: 'Carroll',
      },
      {
        state: 'Illinois',
        city: 'Mount Carroll',
        county: 'Carroll',
      },
      {
        state: 'Illinois',
        city: 'Lanark',
        county: 'Carroll',
      },
      {
        state: 'Illinois',
        city: 'Milledgeville',
        county: 'Carroll',
      },
      {
        state: 'Illinois',
        city: 'Shannon',
        county: 'Carroll',
      },
      {
        state: 'Illinois',
        city: 'Lake Carroll',
        county: 'Carroll',
      },
      {
        state: 'Illinois',
        city: 'Chadwick',
        county: 'Carroll',
      },
      {
        state: 'Illinois',
        city: 'Thomson',
        county: 'Carroll',
      },
      {
        state: 'Illinois',
        city: 'Beardstown',
        county: 'Cass',
      },
      {
        state: 'Illinois',
        city: 'Virginia',
        county: 'Cass',
      },
      {
        state: 'Illinois',
        city: 'Ashland',
        county: 'Cass',
      },
      {
        state: 'Illinois',
        city: 'Chandlerville',
        county: 'Cass',
      },
      {
        state: 'Illinois',
        city: 'Arenzville',
        county: 'Cass',
      },
      {
        state: 'Illinois',
        city: 'Champaign',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Urbana',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Rantoul',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Mahomet',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Savoy',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'St. Joseph',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Tolono',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Lake of the Woods',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Fisher',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Philo',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Homer',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Sidney',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Thomasboro',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Ogden',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Gifford',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Pesotum',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Royal',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Bondville',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Sadorus',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Ludlow',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Broadlands',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Seymour',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Penfield',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Ivesdale',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Longview',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Dewey',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Foosland',
        county: 'Champaign',
      },
      {
        state: 'Illinois',
        city: 'Taylorville',
        county: 'Christian',
      },
      {
        state: 'Illinois',
        city: 'Pana',
        county: 'Christian',
      },
      {
        state: 'Illinois',
        city: 'Kincaid',
        county: 'Christian',
      },
      {
        state: 'Illinois',
        city: 'Assumption',
        county: 'Christian',
      },
      {
        state: 'Illinois',
        city: 'Edinburg',
        county: 'Christian',
      },
      {
        state: 'Illinois',
        city: 'Morrisonville',
        county: 'Christian',
      },
      {
        state: 'Illinois',
        city: 'Tovey',
        county: 'Christian',
      },
      {
        state: 'Illinois',
        city: 'Stonington',
        county: 'Christian',
      },
      {
        state: 'Illinois',
        city: 'Mount Auburn',
        county: 'Christian',
      },
      {
        state: 'Illinois',
        city: 'Langleyville',
        county: 'Christian',
      },
      {
        state: 'Illinois',
        city: 'Owaneco',
        county: 'Christian',
      },
      {
        state: 'Illinois',
        city: 'Palmer',
        county: 'Christian',
      },
      {
        state: 'Illinois',
        city: 'Bulpitt',
        county: 'Christian',
      },
      {
        state: 'Illinois',
        city: 'Jeisyville',
        county: 'Christian',
      },
      {
        state: 'Illinois',
        city: 'Marshall',
        county: 'Clark',
      },
      {
        state: 'Illinois',
        city: 'Casey',
        county: 'Clark',
      },
      {
        state: 'Illinois',
        city: 'Martinsville',
        county: 'Clark',
      },
      {
        state: 'Illinois',
        city: 'Westfield',
        county: 'Clark',
      },
      {
        state: 'Illinois',
        city: 'West Union',
        county: 'Clark',
      },
      {
        state: 'Illinois',
        city: 'Flora',
        county: 'Clay',
      },
      {
        state: 'Illinois',
        city: 'Louisville',
        county: 'Clay',
      },
      {
        state: 'Illinois',
        city: 'Clay city',
        county: 'Clay',
      },
      {
        state: 'Illinois',
        city: 'Xenia',
        county: 'Clay',
      },
      {
        state: 'Illinois',
        city: 'Sailor Springs',
        county: 'Clay',
      },
      {
        state: 'Illinois',
        city: 'Iola',
        county: 'Clay',
      },
      {
        state: 'Illinois',
        city: 'Breese',
        county: 'Clinton',
      },
      {
        state: 'Illinois',
        city: 'New Baden',
        county: 'Clinton',
      },
      {
        state: 'Illinois',
        city: 'Carlyle',
        county: 'Clinton',
      },
      {
        state: 'Illinois',
        city: 'Trenton',
        county: 'Clinton',
      },
      {
        state: 'Illinois',
        city: 'Aviston',
        county: 'Clinton',
      },
      {
        state: 'Illinois',
        city: 'Albers',
        county: 'Clinton',
      },
      {
        state: 'Illinois',
        city: 'Germantown',
        county: 'Clinton',
      },
      {
        state: 'Illinois',
        city: 'Beckemeyer',
        county: 'Clinton',
      },
      {
        state: 'Illinois',
        city: 'Bartelso',
        county: 'Clinton',
      },
      {
        state: 'Illinois',
        city: 'Hoffman',
        county: 'Clinton',
      },
      {
        state: 'Illinois',
        city: 'St. Rose',
        county: 'Clinton',
      },
      {
        state: 'Illinois',
        city: 'Damiansville',
        county: 'Clinton',
      },
      {
        state: 'Illinois',
        city: 'Huey',
        county: 'Clinton',
      },
      {
        state: 'Illinois',
        city: 'Charleston',
        county: 'Coles',
      },
      {
        state: 'Illinois',
        city: 'Mattoon',
        county: 'Coles',
      },
      {
        state: 'Illinois',
        city: 'Oakland',
        county: 'Coles',
      },
      {
        state: 'Illinois',
        city: 'Ashmore',
        county: 'Coles',
      },
      {
        state: 'Illinois',
        city: 'Humboldt',
        county: 'Coles',
      },
      {
        state: 'Illinois',
        city: 'Lerna',
        county: 'Coles',
      },
      {
        state: 'Illinois',
        city: 'Janesville',
        county: 'Coles',
      },
      {
        state: 'Illinois',
        city: 'Trilla',
        county: 'Coles',
      },
      {
        state: 'Illinois',
        city: 'Chicago',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Cicero',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Evanston',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Schaumburg',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Arlington Heights',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Palatine',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Skokie',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Des Plaines',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Orland Park',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Oak Lawn',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Berwyn',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Mount Prospect',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Tinley Park',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Oak Park',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Hoffman Estates',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Glenview',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Streamwood',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Park Ridge',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Wheeling',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Calumet city',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Northbrook',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Elk Grove Village',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Niles',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Burbank',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Lansing',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Wilmette',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Chicago Heights',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Oak Forest',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Melrose Park',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Morton Grove',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Elmwood Park',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Rolling Meadows',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Maywood',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Blue Island',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Dolton',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'South Holland',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Park Forest',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Harvey',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Evergreen Park',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Homewood',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Brookfield',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Matteson',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Alsip',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Bellwood',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Franklin Park',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Palos Hills',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Lemont',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Bridgeview',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Westchester',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Country Club Hills',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'La Grange',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Prospect Heights',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Norridge',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Hickory Hills',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Chicago Ridge',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Midlothian',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Forest Park',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Hazel Crest',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Western Springs',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'La Grange Park',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Lincolnwood',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Richton Park',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Northlake',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Winnetka',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Justice',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Palos Heights',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'River Forest',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Markham',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Schiller Park',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Barrington',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Summit',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Riverdale',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Worth',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Crestwood',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Lyons',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'River Grove',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Sauk Village',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Flossmoor',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Steger',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Riverside',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Lynwood',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Harwood Heights',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Glencoe',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Glenwood',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Hillside',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Broadview',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Inverness',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'North Riverside',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Calumet Park',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Stickney',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Orland Hills',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Countryside',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Willow Springs',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Northfield',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Posen',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Berkeley',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'South Barrington',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Olympia Fields',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Palos Park',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Robbins',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Stone Park',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Hometown',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Barrington Hills',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Burnham',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Indian Head Park',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Rosemont',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'South Chicago Heights',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Dixmoor',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Kenilworth',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Thornton',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Hodgkins',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Merrionette Park',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Ford Heights',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'East Hazel Crest',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Phoenix',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Forest View',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Bedford Park',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Golf',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'McCook',
        county: 'Cook',
      },
      {
        state: 'Illinois',
        city: 'Robinson',
        county: 'Crawford',
      },
      {
        state: 'Illinois',
        city: 'Oblong',
        county: 'Crawford',
      },
      {
        state: 'Illinois',
        city: 'Palestine',
        county: 'Crawford',
      },
      {
        state: 'Illinois',
        city: 'Hutsonville',
        county: 'Crawford',
      },
      {
        state: 'Illinois',
        city: 'Flat Rock',
        county: 'Crawford',
      },
      {
        state: 'Illinois',
        city: 'Stoy',
        county: 'Crawford',
      },
      {
        state: 'Illinois',
        city: 'West York',
        county: 'Crawford',
      },
      {
        state: 'Illinois',
        city: 'Annapolis',
        county: 'Crawford',
      },
      {
        state: 'Illinois',
        city: 'Greenup',
        county: 'Cumberland',
      },
      {
        state: 'Illinois',
        city: 'Neoga',
        county: 'Cumberland',
      },
      {
        state: 'Illinois',
        city: 'Toledo',
        county: 'Cumberland',
      },
      {
        state: 'Illinois',
        city: 'Jewett',
        county: 'Cumberland',
      },
      {
        state: 'Illinois',
        city: 'Clinton',
        county: 'De Witt',
      },
      {
        state: 'Illinois',
        city: 'Farmer city',
        county: 'De Witt',
      },
      {
        state: 'Illinois',
        city: 'Wapella',
        county: 'De Witt',
      },
      {
        state: 'Illinois',
        city: 'Kenney',
        county: 'De Witt',
      },
      {
        state: 'Illinois',
        city: 'Waynesville',
        county: 'De Witt',
      },
      {
        state: 'Illinois',
        city: 'Weldon',
        county: 'De Witt',
      },
      {
        state: 'Illinois',
        city: 'De Witt',
        county: 'De Witt',
      },
      {
        state: 'Illinois',
        city: 'Lane',
        county: 'De Witt',
      },
      {
        state: 'Illinois',
        city: 'DeKalb',
        county: 'DeKalb',
      },
      {
        state: 'Illinois',
        city: 'Sycamore',
        county: 'DeKalb',
      },
      {
        state: 'Illinois',
        city: 'Sandwich',
        county: 'DeKalb',
      },
      {
        state: 'Illinois',
        city: 'Genoa',
        county: 'DeKalb',
      },
      {
        state: 'Illinois',
        city: 'Cortland',
        county: 'DeKalb',
      },
      {
        state: 'Illinois',
        city: 'Hinckley',
        county: 'DeKalb',
      },
      {
        state: 'Illinois',
        city: 'Maple Park',
        county: 'DeKalb',
      },
      {
        state: 'Illinois',
        city: 'Somonauk',
        county: 'DeKalb',
      },
      {
        state: 'Illinois',
        city: 'Waterman',
        county: 'DeKalb',
      },
      {
        state: 'Illinois',
        city: 'Kirkland',
        county: 'DeKalb',
      },
      {
        state: 'Illinois',
        city: 'Malta',
        county: 'DeKalb',
      },
      {
        state: 'Illinois',
        city: 'Kingston',
        county: 'DeKalb',
      },
      {
        state: 'Illinois',
        city: 'Shabbona',
        county: 'DeKalb',
      },
      {
        state: 'Illinois',
        city: 'Tuscola',
        county: 'Douglas',
      },
      {
        state: 'Illinois',
        city: 'Arcola',
        county: 'Douglas',
      },
      {
        state: 'Illinois',
        city: 'Villa Grove',
        county: 'Douglas',
      },
      {
        state: 'Illinois',
        city: 'Arthur',
        county: 'Douglas',
      },
      {
        state: 'Illinois',
        city: 'Newman',
        county: 'Douglas',
      },
      {
        state: 'Illinois',
        city: 'Camargo',
        county: 'Douglas',
      },
      {
        state: 'Illinois',
        city: 'Hindsboro',
        county: 'Douglas',
      },
      {
        state: 'Illinois',
        city: 'Garrett',
        county: 'Douglas',
      },
      {
        state: 'Illinois',
        city: 'Naperville',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Wheaton',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Downers Grove',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Elmhurst',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Lombard',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Bartlett',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Carol Stream',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Hanover Park',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Addison',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Woodridge',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Glendale Heights',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Glen Ellyn',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'West Chicago',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Westmont',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Lisle',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Roselle',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Villa Park',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Bloomingdale',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Darien',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Bensenville',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Hinsdale',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Wood Dale',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Warrenville',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Burr Ridge',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Winfield',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Itasca',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Willowbrook',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Clarendon Hills',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Oak Brook',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Oakbrook Terrace',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Wayne',
        county: 'DuPage',
      },
      {
        state: 'Illinois',
        city: 'Paris',
        county: 'Edgar',
      },
      {
        state: 'Illinois',
        city: 'Chrisman',
        county: 'Edgar',
      },
      {
        state: 'Illinois',
        city: 'Kansas',
        county: 'Edgar',
      },
      {
        state: 'Illinois',
        city: 'Hume',
        county: 'Edgar',
      },
      {
        state: 'Illinois',
        city: 'Brocton',
        county: 'Edgar',
      },
      {
        state: 'Illinois',
        city: 'Metcalf',
        county: 'Edgar',
      },
      {
        state: 'Illinois',
        city: 'Vermilion',
        county: 'Edgar',
      },
      {
        state: 'Illinois',
        city: 'Redmon',
        county: 'Edgar',
      },
      {
        state: 'Illinois',
        city: 'Albion',
        county: 'Edwards',
      },
      {
        state: 'Illinois',
        city: 'West Salem',
        county: 'Edwards',
      },
      {
        state: 'Illinois',
        city: 'Browns',
        county: 'Edwards',
      },
      {
        state: 'Illinois',
        city: 'Bone Gap',
        county: 'Edwards',
      },
      {
        state: 'Illinois',
        city: 'Effingham',
        county: 'Effingham',
      },
      {
        state: 'Illinois',
        city: 'Altamont',
        county: 'Effingham',
      },
      {
        state: 'Illinois',
        city: 'Teutopolis',
        county: 'Effingham',
      },
      {
        state: 'Illinois',
        city: 'Dieterich',
        county: 'Effingham',
      },
      {
        state: 'Illinois',
        city: 'Watson',
        county: 'Effingham',
      },
      {
        state: 'Illinois',
        city: 'Edgewood',
        county: 'Effingham',
      },
      {
        state: 'Illinois',
        city: 'Beecher city',
        county: 'Effingham',
      },
      {
        state: 'Illinois',
        city: 'Mason',
        county: 'Effingham',
      },
      {
        state: 'Illinois',
        city: 'Montrose',
        county: 'Effingham',
      },
      {
        state: 'Illinois',
        city: 'Shumway',
        county: 'Effingham',
      },
      {
        state: 'Illinois',
        city: 'Vandalia',
        county: 'Fayette',
      },
      {
        state: 'Illinois',
        city: 'St. Elmo',
        county: 'Fayette',
      },
      {
        state: 'Illinois',
        city: 'Ramsey',
        county: 'Fayette',
      },
      {
        state: 'Illinois',
        city: 'Brownstown',
        county: 'Fayette',
      },
      {
        state: 'Illinois',
        city: 'Farina',
        county: 'Fayette',
      },
      {
        state: 'Illinois',
        city: 'St. Peter',
        county: 'Fayette',
      },
      {
        state: 'Illinois',
        city: 'Bingham',
        county: 'Fayette',
      },
      {
        state: 'Illinois',
        city: 'La Clede',
        county: 'Fayette',
      },
      {
        state: 'Illinois',
        city: 'Paxton',
        county: 'Ford',
      },
      {
        state: 'Illinois',
        city: 'Gibson city',
        county: 'Ford',
      },
      {
        state: 'Illinois',
        city: 'Piper city',
        county: 'Ford',
      },
      {
        state: 'Illinois',
        city: 'Roberts',
        county: 'Ford',
      },
      {
        state: 'Illinois',
        city: 'Melvin',
        county: 'Ford',
      },
      {
        state: 'Illinois',
        city: 'Kempton',
        county: 'Ford',
      },
      {
        state: 'Illinois',
        city: 'Elliott',
        county: 'Ford',
      },
      {
        state: 'Illinois',
        city: 'Cabery',
        county: 'Ford',
      },
      {
        state: 'Illinois',
        city: 'Sibley',
        county: 'Ford',
      },
      {
        state: 'Illinois',
        city: 'West Frankfort',
        county: 'Franklin',
      },
      {
        state: 'Illinois',
        city: 'Benton',
        county: 'Franklin',
      },
      {
        state: 'Illinois',
        city: 'Christopher',
        county: 'Franklin',
      },
      {
        state: 'Illinois',
        city: 'Sesser',
        county: 'Franklin',
      },
      {
        state: 'Illinois',
        city: 'Zeigler',
        county: 'Franklin',
      },
      {
        state: 'Illinois',
        city: 'Royalton',
        county: 'Franklin',
      },
      {
        state: 'Illinois',
        city: 'Valier',
        county: 'Franklin',
      },
      {
        state: 'Illinois',
        city: 'North city',
        county: 'Franklin',
      },
      {
        state: 'Illinois',
        city: 'West city',
        county: 'Franklin',
      },
      {
        state: 'Illinois',
        city: 'Thompsonville',
        county: 'Franklin',
      },
      {
        state: 'Illinois',
        city: 'Ewing',
        county: 'Franklin',
      },
      {
        state: 'Illinois',
        city: 'Orient',
        county: 'Franklin',
      },
      {
        state: 'Illinois',
        city: 'Buckner',
        county: 'Franklin',
      },
      {
        state: 'Illinois',
        city: 'Hanaford',
        county: 'Franklin',
      },
      {
        state: 'Illinois',
        city: 'Freeman Spur',
        county: 'Franklin',
      },
      {
        state: 'Illinois',
        city: 'Mulkeytown',
        county: 'Franklin',
      },
      {
        state: 'Illinois',
        city: 'Canton',
        county: 'Fulton',
      },
      {
        state: 'Illinois',
        city: 'Farmington',
        county: 'Fulton',
      },
      {
        state: 'Illinois',
        city: 'Lewistown',
        county: 'Fulton',
      },
      {
        state: 'Illinois',
        city: 'Astoria',
        county: 'Fulton',
      },
      {
        state: 'Illinois',
        city: 'Cuba',
        county: 'Fulton',
      },
      {
        state: 'Illinois',
        city: 'Avon',
        county: 'Fulton',
      },
      {
        state: 'Illinois',
        city: 'Vermont',
        county: 'Fulton',
      },
      {
        state: 'Illinois',
        city: 'St. David',
        county: 'Fulton',
      },
      {
        state: 'Illinois',
        city: 'Ipava',
        county: 'Fulton',
      },
      {
        state: 'Illinois',
        city: 'Fairview',
        county: 'Fulton',
      },
      {
        state: 'Illinois',
        city: 'London Mills',
        county: 'Fulton',
      },
      {
        state: 'Illinois',
        city: 'Dunfermline',
        county: 'Fulton',
      },
      {
        state: 'Illinois',
        city: 'Table Grove',
        county: 'Fulton',
      },
      {
        state: 'Illinois',
        city: 'Norris',
        county: 'Fulton',
      },
      {
        state: 'Illinois',
        city: 'Bryant',
        county: 'Fulton',
      },
      {
        state: 'Illinois',
        city: 'Smithfield',
        county: 'Fulton',
      },
      {
        state: 'Illinois',
        city: 'Banner',
        county: 'Fulton',
      },
      {
        state: 'Illinois',
        city: 'Ellisville',
        county: 'Fulton',
      },
      {
        state: 'Illinois',
        city: 'Liverpool',
        county: 'Fulton',
      },
      {
        state: 'Illinois',
        city: 'Marietta',
        county: 'Fulton',
      },
      {
        state: 'Illinois',
        city: 'Shawneetown',
        county: 'Gallatin',
      },
      {
        state: 'Illinois',
        city: 'Ridgway',
        county: 'Gallatin',
      },
      {
        state: 'Illinois',
        city: 'Equality',
        county: 'Gallatin',
      },
      {
        state: 'Illinois',
        city: 'New Haven',
        county: 'Gallatin',
      },
      {
        state: 'Illinois',
        city: 'Omaha',
        county: 'Gallatin',
      },
      {
        state: 'Illinois',
        city: 'Old Shawneetown',
        county: 'Gallatin',
      },
      {
        state: 'Illinois',
        city: 'Junction',
        county: 'Gallatin',
      },
      {
        state: 'Illinois',
        city: 'Carrollton',
        county: 'Greene',
      },
      {
        state: 'Illinois',
        city: 'White Hall',
        county: 'Greene',
      },
      {
        state: 'Illinois',
        city: 'Roodhouse',
        county: 'Greene',
      },
      {
        state: 'Illinois',
        city: 'Greenfield',
        county: 'Greene',
      },
      {
        state: 'Illinois',
        city: 'Kane',
        county: 'Greene',
      },
      {
        state: 'Illinois',
        city: 'Rockbridge',
        county: 'Greene',
      },
      {
        state: 'Illinois',
        city: 'Eldred',
        county: 'Greene',
      },
      {
        state: 'Illinois',
        city: 'Hillview',
        county: 'Greene',
      },
      {
        state: 'Illinois',
        city: 'Morris',
        county: 'Grundy',
      },
      {
        state: 'Illinois',
        city: 'Minooka',
        county: 'Grundy',
      },
      {
        state: 'Illinois',
        city: 'Coal city',
        county: 'Grundy',
      },
      {
        state: 'Illinois',
        city: 'Diamond',
        county: 'Grundy',
      },
      {
        state: 'Illinois',
        city: 'Gardner',
        county: 'Grundy',
      },
      {
        state: 'Illinois',
        city: 'Mazon',
        county: 'Grundy',
      },
      {
        state: 'Illinois',
        city: 'South Wilmington',
        county: 'Grundy',
      },
      {
        state: 'Illinois',
        city: 'Carbon Hill',
        county: 'Grundy',
      },
      {
        state: 'Illinois',
        city: 'Verona',
        county: 'Grundy',
      },
      {
        state: 'Illinois',
        city: 'Kinsman',
        county: 'Grundy',
      },
      {
        state: 'Illinois',
        city: 'East Brooklyn',
        county: 'Grundy',
      },
      {
        state: 'Illinois',
        city: 'McLeansboro',
        county: 'Hamilton',
      },
      {
        state: 'Illinois',
        city: 'Dahlgren',
        county: 'Hamilton',
      },
      {
        state: 'Illinois',
        city: 'Broughton',
        county: 'Hamilton',
      },
      {
        state: 'Illinois',
        city: 'Belle Prairie city',
        county: 'Hamilton',
      },
      {
        state: 'Illinois',
        city: 'Macedonia',
        county: 'Hamilton',
      },
      {
        state: 'Illinois',
        city: 'Hamilton',
        county: 'Hancock',
      },
      {
        state: 'Illinois',
        city: 'Carthage',
        county: 'Hancock',
      },
      {
        state: 'Illinois',
        city: 'Warsaw',
        county: 'Hancock',
      },
      {
        state: 'Illinois',
        city: 'La Harpe',
        county: 'Hancock',
      },
      {
        state: 'Illinois',
        city: 'Nauvoo',
        county: 'Hancock',
      },
      {
        state: 'Illinois',
        city: 'Dallas city',
        county: 'Hancock',
      },
      {
        state: 'Illinois',
        city: 'Bowen',
        county: 'Hancock',
      },
      {
        state: 'Illinois',
        city: 'Augusta',
        county: 'Hancock',
      },
      {
        state: 'Illinois',
        city: 'Plymouth',
        county: 'Hancock',
      },
      {
        state: 'Illinois',
        city: 'West Point',
        county: 'Hancock',
      },
      {
        state: 'Illinois',
        city: 'Elvaston',
        county: 'Hancock',
      },
      {
        state: 'Illinois',
        city: 'Ferris',
        county: 'Hancock',
      },
      {
        state: 'Illinois',
        city: 'Pontoosuc',
        county: 'Hancock',
      },
      {
        state: 'Illinois',
        city: 'Basco',
        county: 'Hancock',
      },
      {
        state: 'Illinois',
        city: 'Niota',
        county: 'Hancock',
      },
      {
        state: 'Illinois',
        city: 'Bentley',
        county: 'Hancock',
      },
      {
        state: 'Illinois',
        city: 'Rosiclare',
        county: 'Hardin',
      },
      {
        state: 'Illinois',
        city: 'Elizabethtown',
        county: 'Hardin',
      },
      {
        state: 'Illinois',
        city: 'Cave-In-Rock',
        county: 'Hardin',
      },
      {
        state: 'Illinois',
        city: 'Oquawka',
        county: 'Henderson',
      },
      {
        state: 'Illinois',
        city: 'Stronghurst',
        county: 'Henderson',
      },
      {
        state: 'Illinois',
        city: 'Biggsville',
        county: 'Henderson',
      },
      {
        state: 'Illinois',
        city: 'Lomax',
        county: 'Henderson',
      },
      {
        state: 'Illinois',
        city: 'Carman',
        county: 'Henderson',
      },
      {
        state: 'Illinois',
        city: 'Gladstone',
        county: 'Henderson',
      },
      {
        state: 'Illinois',
        city: 'Raritan',
        county: 'Henderson',
      },
      {
        state: 'Illinois',
        city: 'Media',
        county: 'Henderson',
      },
      {
        state: 'Illinois',
        city: 'Gulf Port',
        county: 'Henderson',
      },
      {
        state: 'Illinois',
        city: 'Kewanee',
        county: 'Henry',
      },
      {
        state: 'Illinois',
        city: 'Geneseo',
        county: 'Henry',
      },
      {
        state: 'Illinois',
        city: 'Colona',
        county: 'Henry',
      },
      {
        state: 'Illinois',
        city: 'Galva',
        county: 'Henry',
      },
      {
        state: 'Illinois',
        city: 'Cambridge',
        county: 'Henry',
      },
      {
        state: 'Illinois',
        city: 'Orion',
        county: 'Henry',
      },
      {
        state: 'Illinois',
        city: 'Atkinson',
        county: 'Henry',
      },
      {
        state: 'Illinois',
        city: 'Annawan',
        county: 'Henry',
      },
      {
        state: 'Illinois',
        city: 'Woodhull',
        county: 'Henry',
      },
      {
        state: 'Illinois',
        city: 'Alpha',
        county: 'Henry',
      },
      {
        state: 'Illinois',
        city: 'Andover',
        county: 'Henry',
      },
      {
        state: 'Illinois',
        city: 'Cleveland',
        county: 'Henry',
      },
      {
        state: 'Illinois',
        city: 'Hooppole',
        county: 'Henry',
      },
      {
        state: 'Illinois',
        city: 'Ophiem',
        county: 'Henry',
      },
      {
        state: 'Illinois',
        city: 'Osco',
        county: 'Henry',
      },
      {
        state: 'Illinois',
        city: 'Bishop Hill',
        county: 'Henry',
      },
      {
        state: 'Illinois',
        city: 'Nekoma',
        county: 'Henry',
      },
      {
        state: 'Illinois',
        city: 'Lynn Center',
        county: 'Henry',
      },
      {
        state: 'Illinois',
        city: 'Watseka',
        county: 'Iroquois',
      },
      {
        state: 'Illinois',
        city: 'Gilman',
        county: 'Iroquois',
      },
      {
        state: 'Illinois',
        city: 'Milford',
        county: 'Iroquois',
      },
      {
        state: 'Illinois',
        city: 'Clifton',
        county: 'Iroquois',
      },
      {
        state: 'Illinois',
        city: 'Sheldon',
        county: 'Iroquois',
      },
      {
        state: 'Illinois',
        city: 'Onarga',
        county: 'Iroquois',
      },
      {
        state: 'Illinois',
        city: 'Cissna Park',
        county: 'Iroquois',
      },
      {
        state: 'Illinois',
        city: 'Ashkum',
        county: 'Iroquois',
      },
      {
        state: 'Illinois',
        city: 'Danforth',
        county: 'Iroquois',
      },
      {
        state: 'Illinois',
        city: 'Buckley',
        county: 'Iroquois',
      },
      {
        state: 'Illinois',
        city: 'Crescent city',
        county: 'Iroquois',
      },
      {
        state: 'Illinois',
        city: 'Loda',
        county: 'Iroquois',
      },
      {
        state: 'Illinois',
        city: 'Beaverville',
        county: 'Iroquois',
      },
      {
        state: 'Illinois',
        city: 'Martinton',
        county: 'Iroquois',
      },
      {
        state: 'Illinois',
        city: 'Donovan',
        county: 'Iroquois',
      },
      {
        state: 'Illinois',
        city: 'Woodland',
        county: 'Iroquois',
      },
      {
        state: 'Illinois',
        city: 'Iroquois',
        county: 'Iroquois',
      },
      {
        state: 'Illinois',
        city: 'Thawville',
        county: 'Iroquois',
      },
      {
        state: 'Illinois',
        city: 'Wellington',
        county: 'Iroquois',
      },
      {
        state: 'Illinois',
        city: 'Papineau',
        county: 'Iroquois',
      },
      {
        state: 'Illinois',
        city: 'Carbondale',
        county: 'Jackson',
      },
      {
        state: 'Illinois',
        city: 'Murphysboro',
        county: 'Jackson',
      },
      {
        state: 'Illinois',
        city: 'De Soto',
        county: 'Jackson',
      },
      {
        state: 'Illinois',
        city: 'Harrison',
        county: 'Jackson',
      },
      {
        state: 'Illinois',
        city: 'Elkville',
        county: 'Jackson',
      },
      {
        state: 'Illinois',
        city: 'Grand Tower',
        county: 'Jackson',
      },
      {
        state: 'Illinois',
        city: 'Ava',
        county: 'Jackson',
      },
      {
        state: 'Illinois',
        city: 'Makanda',
        county: 'Jackson',
      },
      {
        state: 'Illinois',
        city: 'Gorham',
        county: 'Jackson',
      },
      {
        state: 'Illinois',
        city: 'Dowell',
        county: 'Jackson',
      },
      {
        state: 'Illinois',
        city: 'Campbell Hill',
        county: 'Jackson',
      },
      {
        state: 'Illinois',
        city: 'Vergennes',
        county: 'Jackson',
      },
      {
        state: 'Illinois',
        city: 'Newton',
        county: 'Jasper',
      },
      {
        state: 'Illinois',
        city: 'Ste. Marie',
        county: 'Jasper',
      },
      {
        state: 'Illinois',
        city: 'Willow Hill',
        county: 'Jasper',
      },
      {
        state: 'Illinois',
        city: 'West Liberty',
        county: 'Jasper',
      },
      {
        state: 'Illinois',
        city: 'Wheeler',
        county: 'Jasper',
      },
      {
        state: 'Illinois',
        city: 'Yale',
        county: 'Jasper',
      },
      {
        state: 'Illinois',
        city: 'Hidalgo',
        county: 'Jasper',
      },
      {
        state: 'Illinois',
        city: 'Rose Hill',
        county: 'Jasper',
      },
      {
        state: 'Illinois',
        city: 'Mount Vernon',
        county: 'Jefferson',
      },
      {
        state: 'Illinois',
        city: 'Ina',
        county: 'Jefferson',
      },
      {
        state: 'Illinois',
        city: 'Woodlawn',
        county: 'Jefferson',
      },
      {
        state: 'Illinois',
        city: 'Bluford',
        county: 'Jefferson',
      },
      {
        state: 'Illinois',
        city: 'Dix',
        county: 'Jefferson',
      },
      {
        state: 'Illinois',
        city: 'Bonnie',
        county: 'Jefferson',
      },
      {
        state: 'Illinois',
        city: 'Waltonville',
        county: 'Jefferson',
      },
      {
        state: 'Illinois',
        city: 'Belle Rive',
        county: 'Jefferson',
      },
      {
        state: 'Illinois',
        city: 'Opdyke',
        county: 'Jefferson',
      },
      {
        state: 'Illinois',
        city: 'Nason',
        county: 'Jefferson',
      },
      {
        state: 'Illinois',
        city: 'Jerseyville',
        county: 'Jersey',
      },
      {
        state: 'Illinois',
        city: 'Elsah',
        county: 'Jersey',
      },
      {
        state: 'Illinois',
        city: 'Grafton',
        county: 'Jersey',
      },
      {
        state: 'Illinois',
        city: 'Otterville',
        county: 'Jersey',
      },
      {
        state: 'Illinois',
        city: 'Fieldon',
        county: 'Jersey',
      },
      {
        state: 'Illinois',
        city: 'Fidelity',
        county: 'Jersey',
      },
      {
        state: 'Illinois',
        city: 'Galena',
        county: 'Jo Daviess',
      },
      {
        state: 'Illinois',
        city: 'Stockton',
        county: 'Jo Daviess',
      },
      {
        state: 'Illinois',
        city: 'The Galena Territory',
        county: 'Jo Daviess',
      },
      {
        state: 'Illinois',
        city: 'East Dubuque',
        county: 'Jo Daviess',
      },
      {
        state: 'Illinois',
        city: 'Warren',
        county: 'Jo Daviess',
      },
      {
        state: 'Illinois',
        city: 'Elizabeth',
        county: 'Jo Daviess',
      },
      {
        state: 'Illinois',
        city: 'Hanover',
        county: 'Jo Daviess',
      },
      {
        state: 'Illinois',
        city: 'Apple Canyon Lake',
        county: 'Jo Daviess',
      },
      {
        state: 'Illinois',
        city: 'Scales Mound',
        county: 'Jo Daviess',
      },
      {
        state: 'Illinois',
        city: 'Apple River',
        county: 'Jo Daviess',
      },
      {
        state: 'Illinois',
        city: 'Menominee',
        county: 'Jo Daviess',
      },
      {
        state: 'Illinois',
        city: 'Nora',
        county: 'Jo Daviess',
      },
      {
        state: 'Illinois',
        city: 'Vienna',
        county: 'Johnson',
      },
      {
        state: 'Illinois',
        city: 'Goreville',
        county: 'Johnson',
      },
      {
        state: 'Illinois',
        city: 'Buncombe',
        county: 'Johnson',
      },
      {
        state: 'Illinois',
        city: 'Cypress',
        county: 'Johnson',
      },
      {
        state: 'Illinois',
        city: 'New Burnside',
        county: 'Johnson',
      },
      {
        state: 'Illinois',
        city: 'Belknap',
        county: 'Johnson',
      },
      {
        state: 'Illinois',
        city: 'Simpson',
        county: 'Johnson',
      },
      {
        state: 'Illinois',
        city: 'Aurora',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'Elgin',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'Carpentersville',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'St. Charles',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'Batavia',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'South Elgin',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'Geneva',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'Montgomery',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'North Aurora',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'Campton Hills',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'Pingree Grove',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'Sugar Grove',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'Gilberts',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'Hampshire',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'West Dundee',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'Elburn',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'Sleepy Hollow',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'East Dundee',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'Prestbury',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'Lily Lake',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'Big Rock',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'Kaneville',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'Burlington',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'Virgil',
        county: 'Kane',
      },
      {
        state: 'Illinois',
        city: 'Kankakee',
        county: 'Kankakee',
      },
      {
        state: 'Illinois',
        city: 'Bourbonnais',
        county: 'Kankakee',
      },
      {
        state: 'Illinois',
        city: 'Bradley',
        county: 'Kankakee',
      },
      {
        state: 'Illinois',
        city: 'Manteno',
        county: 'Kankakee',
      },
      {
        state: 'Illinois',
        city: 'Momence',
        county: 'Kankakee',
      },
      {
        state: 'Illinois',
        city: 'Grant Park',
        county: 'Kankakee',
      },
      {
        state: 'Illinois',
        city: 'Limestone',
        county: 'Kankakee',
      },
      {
        state: 'Illinois',
        city: 'Herscher',
        county: 'Kankakee',
      },
      {
        state: 'Illinois',
        city: 'St. Anne',
        county: 'Kankakee',
      },
      {
        state: 'Illinois',
        city: 'Chebanse',
        county: 'Kankakee',
      },
      {
        state: 'Illinois',
        city: 'Essex',
        county: 'Kankakee',
      },
      {
        state: 'Illinois',
        city: 'Aroma Park',
        county: 'Kankakee',
      },
      {
        state: 'Illinois',
        city: 'Hopkins Park',
        county: 'Kankakee',
      },
      {
        state: 'Illinois',
        city: 'Sun River Terrace',
        county: 'Kankakee',
      },
      {
        state: 'Illinois',
        city: 'Bonfield',
        county: 'Kankakee',
      },
      {
        state: 'Illinois',
        city: 'Buckingham',
        county: 'Kankakee',
      },
      {
        state: 'Illinois',
        city: 'Sammons Point',
        county: 'Kankakee',
      },
      {
        state: 'Illinois',
        city: 'Reddick',
        county: 'Kankakee',
      },
      {
        state: 'Illinois',
        city: 'Union Hill',
        county: 'Kankakee',
      },
      {
        state: 'Illinois',
        city: 'Irwin',
        county: 'Kankakee',
      },
      {
        state: 'Illinois',
        city: 'Oswego',
        county: 'Kendall',
      },
      {
        state: 'Illinois',
        city: 'Yorkville',
        county: 'Kendall',
      },
      {
        state: 'Illinois',
        city: 'Plano',
        county: 'Kendall',
      },
      {
        state: 'Illinois',
        city: 'Boulder Hill',
        county: 'Kendall',
      },
      {
        state: 'Illinois',
        city: 'Newark',
        county: 'Kendall',
      },
      {
        state: 'Illinois',
        city: 'Millbrook',
        county: 'Kendall',
      },
      {
        state: 'Illinois',
        city: 'Lisbon',
        county: 'Kendall',
      },
      {
        state: 'Illinois',
        city: 'Plattville',
        county: 'Kendall',
      },
      {
        state: 'Illinois',
        city: 'Galesburg',
        county: 'Knox',
      },
      {
        state: 'Illinois',
        city: 'Abingdon',
        county: 'Knox',
      },
      {
        state: 'Illinois',
        city: 'Knoxville',
        county: 'Knox',
      },
      {
        state: 'Illinois',
        city: 'Oneida',
        county: 'Knox',
      },
      {
        state: 'Illinois',
        city: 'Wataga',
        county: 'Knox',
      },
      {
        state: 'Illinois',
        city: 'Yates city',
        county: 'Knox',
      },
      {
        state: 'Illinois',
        city: 'Oak Run',
        county: 'Knox',
      },
      {
        state: 'Illinois',
        city: 'Altona',
        county: 'Knox',
      },
      {
        state: 'Illinois',
        city: 'East Galesburg',
        county: 'Knox',
      },
      {
        state: 'Illinois',
        city: 'Williamsfield',
        county: 'Knox',
      },
      {
        state: 'Illinois',
        city: 'Victoria',
        county: 'Knox',
      },
      {
        state: 'Illinois',
        city: 'Henderson',
        county: 'Knox',
      },
      {
        state: 'Illinois',
        city: 'Maquon',
        county: 'Knox',
      },
      {
        state: 'Illinois',
        city: 'Rio',
        county: 'Knox',
      },
      {
        state: 'Illinois',
        city: 'Gilson',
        county: 'Knox',
      },
      {
        state: 'Illinois',
        city: 'St. Augustine',
        county: 'Knox',
      },
      {
        state: 'Illinois',
        city: 'Round Lake Beach',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Waukegan',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Buffalo Grove',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Mundelein',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Gurnee',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'North Chicago',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Highland Park',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Vernon Hills',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Zion',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Grayslake',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Libertyville',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Lake Zurich',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Lake Forest',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Deerfield',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Round Lake',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Antioch',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Lindenhurst',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Wauconda',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Beach Park',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Fox Lake',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Gages Lake',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Hawthorn Woods',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Lake Villa',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Long Grove',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Lincolnshire',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Park city',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Round Lake Park',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Winthrop Harbor',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Volo',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Lake Bluff',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Lake Barrington',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Grandwood Park',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Highwood',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Kildeer',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Green Oaks',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Riverwoods',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Deer Park',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Hainesville',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Wadsworth',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Long Lake',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'North Barrington',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Round Lake Heights',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Venetian Village',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Fox Lake Hills',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Channel Lake',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Knollwood',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Port Barrington',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Forest Lake',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Tower Lakes',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Lake Catherine',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Bannockburn',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Third Lake',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Indian Creek',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Mettawa',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Old Mill Creek',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Ottawa',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Streator',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Peru',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'LaSalle',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Mendota',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Lake Holiday',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Marseilles',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Oglesby',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Sheridan',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Seneca',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Earlville',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'North Utica',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Leland',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Tonica',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Millington',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Grand Ridge',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Dayton',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Lostant',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Naplate',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Ransom',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Cedar Point',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Kangley',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Serena',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Rutland',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Wedron',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Troy Grove',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Harding',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Dana',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Leonore',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Triumph',
        county: 'LaSalle',
      },
      {
        state: 'Illinois',
        city: 'Lawrenceville',
        county: 'Lawrence',
      },
      {
        state: 'Illinois',
        city: 'Sumner',
        county: 'Lawrence',
      },
      {
        state: 'Illinois',
        city: 'Bridgeport',
        county: 'Lawrence',
      },
      {
        state: 'Illinois',
        city: 'St. Francisville',
        county: 'Lawrence',
      },
      {
        state: 'Illinois',
        city: 'Russellville',
        county: 'Lawrence',
      },
      {
        state: 'Illinois',
        city: 'Dixon',
        county: 'Lee',
      },
      {
        state: 'Illinois',
        city: 'Amboy',
        county: 'Lee',
      },
      {
        state: 'Illinois',
        city: 'Franklin Grove',
        county: 'Lee',
      },
      {
        state: 'Illinois',
        city: 'Paw Paw',
        county: 'Lee',
      },
      {
        state: 'Illinois',
        city: 'Ashton',
        county: 'Lee',
      },
      {
        state: 'Illinois',
        city: 'Sublette',
        county: 'Lee',
      },
      {
        state: 'Illinois',
        city: 'Lee',
        county: 'Lee',
      },
      {
        state: 'Illinois',
        city: 'Steward',
        county: 'Lee',
      },
      {
        state: 'Illinois',
        city: 'Compton',
        county: 'Lee',
      },
      {
        state: 'Illinois',
        city: 'Nachusa',
        county: 'Lee',
      },
      {
        state: 'Illinois',
        city: 'West Brooklyn',
        county: 'Lee',
      },
      {
        state: 'Illinois',
        city: 'Nelson',
        county: 'Lee',
      },
      {
        state: 'Illinois',
        city: 'Harmon',
        county: 'Lee',
      },
      {
        state: 'Illinois',
        city: 'Lee Center',
        county: 'Lee',
      },
      {
        state: 'Illinois',
        city: 'Pontiac',
        county: 'Livingston',
      },
      {
        state: 'Illinois',
        city: 'Dwight',
        county: 'Livingston',
      },
      {
        state: 'Illinois',
        city: 'Fairbury',
        county: 'Livingston',
      },
      {
        state: 'Illinois',
        city: 'Chatsworth',
        county: 'Livingston',
      },
      {
        state: 'Illinois',
        city: 'Forrest',
        county: 'Livingston',
      },
      {
        state: 'Illinois',
        city: 'Odell',
        county: 'Livingston',
      },
      {
        state: 'Illinois',
        city: 'Flanagan',
        county: 'Livingston',
      },
      {
        state: 'Illinois',
        city: 'Cullom',
        county: 'Livingston',
      },
      {
        state: 'Illinois',
        city: 'Saunemin',
        county: 'Livingston',
      },
      {
        state: 'Illinois',
        city: 'Cornell',
        county: 'Livingston',
      },
      {
        state: 'Illinois',
        city: 'Long Point',
        county: 'Livingston',
      },
      {
        state: 'Illinois',
        city: 'Campus',
        county: 'Livingston',
      },
      {
        state: 'Illinois',
        city: 'Emington',
        county: 'Livingston',
      },
      {
        state: 'Illinois',
        city: 'Strawn',
        county: 'Livingston',
      },
      {
        state: 'Illinois',
        city: 'Lincoln',
        county: 'Logan',
      },
      {
        state: 'Illinois',
        city: 'Atlanta',
        county: 'Logan',
      },
      {
        state: 'Illinois',
        city: 'Mount Pulaski',
        county: 'Logan',
      },
      {
        state: 'Illinois',
        city: 'Elkhart',
        county: 'Logan',
      },
      {
        state: 'Illinois',
        city: 'Latham',
        county: 'Logan',
      },
      {
        state: 'Illinois',
        city: 'Emden',
        county: 'Logan',
      },
      {
        state: 'Illinois',
        city: 'Hartsburg',
        county: 'Logan',
      },
      {
        state: 'Illinois',
        city: 'New Holland',
        county: 'Logan',
      },
      {
        state: 'Illinois',
        city: 'Middletown',
        county: 'Logan',
      },
      {
        state: 'Illinois',
        city: 'Beason',
        county: 'Logan',
      },
      {
        state: 'Illinois',
        city: 'Broadwell',
        county: 'Logan',
      },
      {
        state: 'Illinois',
        city: 'Chestnut',
        county: 'Logan',
      },
      {
        state: 'Illinois',
        city: 'Cornland',
        county: 'Logan',
      },
      {
        state: 'Illinois',
        city: 'Decatur',
        county: 'Macon',
      },
      {
        state: 'Illinois',
        city: 'Mount Zion',
        county: 'Macon',
      },
      {
        state: 'Illinois',
        city: 'Forsyth',
        county: 'Macon',
      },
      {
        state: 'Illinois',
        city: 'Maroa',
        county: 'Macon',
      },
      {
        state: 'Illinois',
        city: 'Long Creek',
        county: 'Macon',
      },
      {
        state: 'Illinois',
        city: 'Harristown',
        county: 'Macon',
      },
      {
        state: 'Illinois',
        city: 'Warrensburg',
        county: 'Macon',
      },
      {
        state: 'Illinois',
        city: 'Oreana',
        county: 'Macon',
      },
      {
        state: 'Illinois',
        city: 'Macon',
        county: 'Macon',
      },
      {
        state: 'Illinois',
        city: 'Blue Mound',
        county: 'Macon',
      },
      {
        state: 'Illinois',
        city: 'Argenta',
        county: 'Macon',
      },
      {
        state: 'Illinois',
        city: 'Niantic',
        county: 'Macon',
      },
      {
        state: 'Illinois',
        city: 'Boody',
        county: 'Macon',
      },
      {
        state: 'Illinois',
        city: 'Elwin',
        county: 'Macon',
      },
      {
        state: 'Illinois',
        city: 'Carlinville',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Staunton',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Virden',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Gillespie',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Brighton',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Mount Olive',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Girard',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Benld',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Bunker Hill',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Shipman',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Wilsonville',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Palmyra',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Mount Clare',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Royal Lakes',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Medora',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Lake Ka-Ho',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'East Gillespie',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Chesterfield',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Modesto',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Standard city',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Sawyerville',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Eagarville',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'White city',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Nilwood',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Dorchester',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Hettick',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Scottville',
        county: 'Macoupin',
      },
      {
        state: 'Illinois',
        city: 'Alton',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Granite city',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Edwardsville',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Collinsville',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Godfrey',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Glen Carbon',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Troy',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Wood River',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Highland',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Bethalto',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Maryville',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Pontoon Beach',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'East Alton',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Rosewood Heights',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Holiday Shores',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Madison',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'South Roxana',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Venice',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Hartford',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'St. Jacob',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Roxana',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Marine',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Mitchell',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Hamel',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Livingston',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Worden',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Alhambra',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Moro',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Grantfork',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'New Douglas',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Prairietown',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Williamson',
        county: 'Madison',
      },
      {
        state: 'Illinois',
        city: 'Centralia',
        county: 'Marion',
      },
      {
        state: 'Illinois',
        city: 'Salem',
        county: 'Marion',
      },
      {
        state: 'Illinois',
        city: 'Central city',
        county: 'Marion',
      },
      {
        state: 'Illinois',
        city: 'Sandoval',
        county: 'Marion',
      },
      {
        state: 'Illinois',
        city: 'Odin',
        county: 'Marion',
      },
      {
        state: 'Illinois',
        city: 'Kinmundy',
        county: 'Marion',
      },
      {
        state: 'Illinois',
        city: 'Patoka',
        county: 'Marion',
      },
      {
        state: 'Illinois',
        city: 'Junction city',
        county: 'Marion',
      },
      {
        state: 'Illinois',
        city: 'Iuka',
        county: 'Marion',
      },
      {
        state: 'Illinois',
        city: 'Alma',
        county: 'Marion',
      },
      {
        state: 'Illinois',
        city: 'Walnut Hill',
        county: 'Marion',
      },
      {
        state: 'Illinois',
        city: 'Kell',
        county: 'Marion',
      },
      {
        state: 'Illinois',
        city: 'Vernon',
        county: 'Marion',
      },
      {
        state: 'Illinois',
        city: 'Henry',
        county: 'Marshall',
      },
      {
        state: 'Illinois',
        city: 'Lacon',
        county: 'Marshall',
      },
      {
        state: 'Illinois',
        city: 'Toluca',
        county: 'Marshall',
      },
      {
        state: 'Illinois',
        city: 'Wenona',
        county: 'Marshall',
      },
      {
        state: 'Illinois',
        city: 'Hopewell',
        county: 'Marshall',
      },
      {
        state: 'Illinois',
        city: 'Varna',
        county: 'Marshall',
      },
      {
        state: 'Illinois',
        city: 'Sparland',
        county: 'Marshall',
      },
      {
        state: 'Illinois',
        city: 'La Rose',
        county: 'Marshall',
      },
      {
        state: 'Illinois',
        city: 'Havana',
        county: 'Mason',
      },
      {
        state: 'Illinois',
        city: 'Mason city',
        county: 'Mason',
      },
      {
        state: 'Illinois',
        city: 'Manito',
        county: 'Mason',
      },
      {
        state: 'Illinois',
        city: 'San Jose',
        county: 'Mason',
      },
      {
        state: 'Illinois',
        city: 'Kilbourne',
        county: 'Mason',
      },
      {
        state: 'Illinois',
        city: 'Forest city',
        county: 'Mason',
      },
      {
        state: 'Illinois',
        city: 'Bath',
        county: 'Mason',
      },
      {
        state: 'Illinois',
        city: 'Easton',
        county: 'Mason',
      },
      {
        state: 'Illinois',
        city: 'Goofy Ridge',
        county: 'Mason',
      },
      {
        state: 'Illinois',
        city: 'Topeka',
        county: 'Mason',
      },
      {
        state: 'Illinois',
        city: 'Metropolis',
        county: 'Massac',
      },
      {
        state: 'Illinois',
        city: 'Brookport',
        county: 'Massac',
      },
      {
        state: 'Illinois',
        city: 'Joppa',
        county: 'Massac',
      },
      {
        state: 'Illinois',
        city: 'Macomb',
        county: 'McDonough',
      },
      {
        state: 'Illinois',
        city: 'Bushnell',
        county: 'McDonough',
      },
      {
        state: 'Illinois',
        city: 'Colchester',
        county: 'McDonough',
      },
      {
        state: 'Illinois',
        city: 'Blandinsville',
        county: 'McDonough',
      },
      {
        state: 'Illinois',
        city: 'Industry',
        county: 'McDonough',
      },
      {
        state: 'Illinois',
        city: 'Good Hope',
        county: 'McDonough',
      },
      {
        state: 'Illinois',
        city: 'Prairie city',
        county: 'McDonough',
      },
      {
        state: 'Illinois',
        city: 'Bardolph',
        county: 'McDonough',
      },
      {
        state: 'Illinois',
        city: 'Adair',
        county: 'McDonough',
      },
      {
        state: 'Illinois',
        city: 'Tennessee',
        county: 'McDonough',
      },
      {
        state: 'Illinois',
        city: 'Sciota',
        county: 'McDonough',
      },
      {
        state: 'Illinois',
        city: 'Crystal Lake',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Algonquin',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Lake in the Hills',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Huntley',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'McHenry',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Woodstock',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Cary',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Harvard',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Island Lake',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Marengo',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Johnsburg',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Lakemoor',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Spring Grove',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Fox River Grove',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Lakewood',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Wonder Lake',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Pistakee Highlands',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Oakwood Hills',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Richmond',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Prairie Grove',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Hebron',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Bull Valley',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'McCullom Lake',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Chemung',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Ringwood',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Holiday Hills',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Union',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Trout Valley',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Greenwood',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Ridgefield',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Solon Mills',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Burtons Bridge',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Alden',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Lawrence',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Hartland',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Harmony',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Franklinville',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Riley',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Coral',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Big Foot Prairie',
        county: 'McHenry',
      },
      {
        state: 'Illinois',
        city: 'Bloomington',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'Normal',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'Le Roy',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'Heyworth',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'Lexington',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'Hudson',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'Chenoa',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'Twin Grove',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'Downs',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'Gridley',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'Colfax',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'Danvers',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'McLean',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'Carlock',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'Saybrook',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'Stanford',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'Arrowsmith',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'Towanda',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'Bellflower',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'Anchor',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'Ellsworth',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'Cooksville',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'Shirley',
        county: 'McLean',
      },
      {
        state: 'Illinois',
        city: 'Petersburg',
        county: 'Menard',
      },
      {
        state: 'Illinois',
        city: 'Athens',
        county: 'Menard',
      },
      {
        state: 'Illinois',
        city: 'Greenview',
        county: 'Menard',
      },
      {
        state: 'Illinois',
        city: 'Lake Petersburg',
        county: 'Menard',
      },
      {
        state: 'Illinois',
        city: 'Tallula',
        county: 'Menard',
      },
      {
        state: 'Illinois',
        city: 'Oakford',
        county: 'Menard',
      },
      {
        state: 'Illinois',
        city: 'Aledo',
        county: 'Mercer',
      },
      {
        state: 'Illinois',
        city: 'Viola',
        county: 'Mercer',
      },
      {
        state: 'Illinois',
        city: 'Matherville',
        county: 'Mercer',
      },
      {
        state: 'Illinois',
        city: 'Sherrard',
        county: 'Mercer',
      },
      {
        state: 'Illinois',
        city: 'Keithsburg',
        county: 'Mercer',
      },
      {
        state: 'Illinois',
        city: 'New Boston',
        county: 'Mercer',
      },
      {
        state: 'Illinois',
        city: 'Joy',
        county: 'Mercer',
      },
      {
        state: 'Illinois',
        city: 'Seaton',
        county: 'Mercer',
      },
      {
        state: 'Illinois',
        city: 'North Henderson',
        county: 'Mercer',
      },
      {
        state: 'Illinois',
        city: 'Preemption',
        county: 'Mercer',
      },
      {
        state: 'Illinois',
        city: 'Cable',
        county: 'Mercer',
      },
      {
        state: 'Illinois',
        city: 'Swedona',
        county: 'Mercer',
      },
      {
        state: 'Illinois',
        city: 'Millersburg',
        county: 'Mercer',
      },
      {
        state: 'Illinois',
        city: 'Hamlet',
        county: 'Mercer',
      },
      {
        state: 'Illinois',
        city: 'Eliza',
        county: 'Mercer',
      },
      {
        state: 'Illinois',
        city: 'Columbia',
        county: 'Monroe',
      },
      {
        state: 'Illinois',
        city: 'Waterloo',
        county: 'Monroe',
      },
      {
        state: 'Illinois',
        city: 'Valmeyer',
        county: 'Monroe',
      },
      {
        state: 'Illinois',
        city: 'Hecker',
        county: 'Monroe',
      },
      {
        state: 'Illinois',
        city: 'Maeystown',
        county: 'Monroe',
      },
      {
        state: 'Illinois',
        city: 'Fults',
        county: 'Monroe',
      },
      {
        state: 'Illinois',
        city: 'Litchfield',
        county: 'Montgomery',
      },
      {
        state: 'Illinois',
        city: 'Hillsboro',
        county: 'Montgomery',
      },
      {
        state: 'Illinois',
        city: 'Nokomis',
        county: 'Montgomery',
      },
      {
        state: 'Illinois',
        city: 'Raymond',
        county: 'Montgomery',
      },
      {
        state: 'Illinois',
        city: 'Taylor Springs',
        county: 'Montgomery',
      },
      {
        state: 'Illinois',
        city: 'Farmersville',
        county: 'Montgomery',
      },
      {
        state: 'Illinois',
        city: 'Witt',
        county: 'Montgomery',
      },
      {
        state: 'Illinois',
        city: 'Coffeen',
        county: 'Montgomery',
      },
      {
        state: 'Illinois',
        city: 'Schram city',
        county: 'Montgomery',
      },
      {
        state: 'Illinois',
        city: 'Coalton',
        county: 'Montgomery',
      },
      {
        state: 'Illinois',
        city: 'Irving',
        county: 'Montgomery',
      },
      {
        state: 'Illinois',
        city: 'Butler',
        county: 'Montgomery',
      },
      {
        state: 'Illinois',
        city: 'Fillmore',
        county: 'Montgomery',
      },
      {
        state: 'Illinois',
        city: 'Panama',
        county: 'Montgomery',
      },
      {
        state: 'Illinois',
        city: 'Harvel',
        county: 'Montgomery',
      },
      {
        state: 'Illinois',
        city: 'Walshville',
        county: 'Montgomery',
      },
      {
        state: 'Illinois',
        city: 'Donnellson',
        county: 'Montgomery',
      },
      {
        state: 'Illinois',
        city: 'Waggoner',
        county: 'Montgomery',
      },
      {
        state: 'Illinois',
        city: 'Ohlman',
        county: 'Montgomery',
      },
      {
        state: 'Illinois',
        city: 'Wenonah',
        county: 'Montgomery',
      },
      {
        state: 'Illinois',
        city: 'Jacksonville',
        county: 'Morgan',
      },
      {
        state: 'Illinois',
        city: 'South Jacksonville',
        county: 'Morgan',
      },
      {
        state: 'Illinois',
        city: 'Waverly',
        county: 'Morgan',
      },
      {
        state: 'Illinois',
        city: 'Meredosia',
        county: 'Morgan',
      },
      {
        state: 'Illinois',
        city: 'Franklin',
        county: 'Morgan',
      },
      {
        state: 'Illinois',
        city: 'Murrayville',
        county: 'Morgan',
      },
      {
        state: 'Illinois',
        city: 'Woodson',
        county: 'Morgan',
      },
      {
        state: 'Illinois',
        city: 'Chapin',
        county: 'Morgan',
      },
      {
        state: 'Illinois',
        city: 'Alexander',
        county: 'Morgan',
      },
      {
        state: 'Illinois',
        city: 'Concord',
        county: 'Morgan',
      },
      {
        state: 'Illinois',
        city: 'Lynnville',
        county: 'Morgan',
      },
      {
        state: 'Illinois',
        city: 'Literberry',
        county: 'Morgan',
      },
      {
        state: 'Illinois',
        city: 'Sullivan',
        county: 'Moultrie',
      },
      {
        state: 'Illinois',
        city: 'Bethany',
        county: 'Moultrie',
      },
      {
        state: 'Illinois',
        city: 'Lovington',
        county: 'Moultrie',
      },
      {
        state: 'Illinois',
        city: 'Dalton city',
        county: 'Moultrie',
      },
      {
        state: 'Illinois',
        city: 'Gays',
        county: 'Moultrie',
      },
      {
        state: 'Illinois',
        city: 'Allenville',
        county: 'Moultrie',
      },
      {
        state: 'Illinois',
        city: 'Lake city',
        county: 'Moultrie',
      },
      {
        state: 'Illinois',
        city: 'Rochelle',
        county: 'Ogle',
      },
      {
        state: 'Illinois',
        city: 'Oregon',
        county: 'Ogle',
      },
      {
        state: 'Illinois',
        city: 'Byron',
        county: 'Ogle',
      },
      {
        state: 'Illinois',
        city: 'Mount Morris',
        county: 'Ogle',
      },
      {
        state: 'Illinois',
        city: 'Davis Junction',
        county: 'Ogle',
      },
      {
        state: 'Illinois',
        city: 'Polo',
        county: 'Ogle',
      },
      {
        state: 'Illinois',
        city: 'Hillcrest',
        county: 'Ogle',
      },
      {
        state: 'Illinois',
        city: 'Forreston',
        county: 'Ogle',
      },
      {
        state: 'Illinois',
        city: 'Stillman Valley',
        county: 'Ogle',
      },
      {
        state: 'Illinois',
        city: 'Creston',
        county: 'Ogle',
      },
      {
        state: 'Illinois',
        city: 'Lost Nation',
        county: 'Ogle',
      },
      {
        state: 'Illinois',
        city: 'Leaf River',
        county: 'Ogle',
      },
      {
        state: 'Illinois',
        city: 'Monroe Center',
        county: 'Ogle',
      },
      {
        state: 'Illinois',
        city: 'Grand Detour',
        county: 'Ogle',
      },
      {
        state: 'Illinois',
        city: 'Kings',
        county: 'Ogle',
      },
      {
        state: 'Illinois',
        city: 'Holcomb',
        county: 'Ogle',
      },
      {
        state: 'Illinois',
        city: 'Baileyville',
        county: 'Ogle',
      },
      {
        state: 'Illinois',
        city: 'Adeline',
        county: 'Ogle',
      },
      {
        state: 'Illinois',
        city: 'Peoria',
        county: 'Peoria',
      },
      {
        state: 'Illinois',
        city: 'Chillicothe',
        county: 'Peoria',
      },
      {
        state: 'Illinois',
        city: 'Bartonville',
        county: 'Peoria',
      },
      {
        state: 'Illinois',
        city: 'Peoria Heights',
        county: 'Peoria',
      },
      {
        state: 'Illinois',
        city: 'West Peoria',
        county: 'Peoria',
      },
      {
        state: 'Illinois',
        city: 'Elmwood',
        county: 'Peoria',
      },
      {
        state: 'Illinois',
        city: 'Bellevue',
        county: 'Peoria',
      },
      {
        state: 'Illinois',
        city: 'Princeville',
        county: 'Peoria',
      },
      {
        state: 'Illinois',
        city: 'Rome',
        county: 'Peoria',
      },
      {
        state: 'Illinois',
        city: 'Dunlap',
        county: 'Peoria',
      },
      {
        state: 'Illinois',
        city: 'Lake Camelot',
        county: 'Peoria',
      },
      {
        state: 'Illinois',
        city: 'Hanna city',
        county: 'Peoria',
      },
      {
        state: 'Illinois',
        city: 'Glasford',
        county: 'Peoria',
      },
      {
        state: 'Illinois',
        city: 'Brimfield',
        county: 'Peoria',
      },
      {
        state: 'Illinois',
        city: 'Norwood',
        county: 'Peoria',
      },
      {
        state: 'Illinois',
        city: 'Trivoli',
        county: 'Peoria',
      },
      {
        state: 'Illinois',
        city: 'Mapleton',
        county: 'Peoria',
      },
      {
        state: 'Illinois',
        city: 'Mossville',
        county: 'Peoria',
      },
      {
        state: 'Illinois',
        city: 'Kingston Mines',
        county: 'Peoria',
      },
      {
        state: 'Illinois',
        city: 'Smithville',
        county: 'Peoria',
      },
      {
        state: 'Illinois',
        city: 'Du Quoin',
        county: 'Perry',
      },
      {
        state: 'Illinois',
        city: 'Pinckneyville',
        county: 'Perry',
      },
      {
        state: 'Illinois',
        city: 'Tamaroa',
        county: 'Perry',
      },
      {
        state: 'Illinois',
        city: 'Willisville',
        county: 'Perry',
      },
      {
        state: 'Illinois',
        city: 'Cutler',
        county: 'Perry',
      },
      {
        state: 'Illinois',
        city: 'St. Johns',
        county: 'Perry',
      },
      {
        state: 'Illinois',
        city: 'Monticello',
        county: 'Piatt',
      },
      {
        state: 'Illinois',
        city: 'Bement',
        county: 'Piatt',
      },
      {
        state: 'Illinois',
        city: 'Cerro Gordo',
        county: 'Piatt',
      },
      {
        state: 'Illinois',
        city: 'Atwood',
        county: 'Piatt',
      },
      {
        state: 'Illinois',
        city: 'Mansfield',
        county: 'Piatt',
      },
      {
        state: 'Illinois',
        city: 'Hammond',
        county: 'Piatt',
      },
      {
        state: 'Illinois',
        city: 'De Land',
        county: 'Piatt',
      },
      {
        state: 'Illinois',
        city: 'Cisco',
        county: 'Piatt',
      },
      {
        state: 'Illinois',
        city: 'LaPlace',
        county: 'Piatt',
      },
      {
        state: 'Illinois',
        city: 'White Heath',
        county: 'Piatt',
      },
      {
        state: 'Illinois',
        city: 'Pittsfield',
        county: 'Pike',
      },
      {
        state: 'Illinois',
        city: 'Barry',
        county: 'Pike',
      },
      {
        state: 'Illinois',
        city: 'Griggsville',
        county: 'Pike',
      },
      {
        state: 'Illinois',
        city: 'Pleasant Hill',
        county: 'Pike',
      },
      {
        state: 'Illinois',
        city: 'Hull',
        county: 'Pike',
      },
      {
        state: 'Illinois',
        city: 'Nebo',
        county: 'Pike',
      },
      {
        state: 'Illinois',
        city: 'Perry',
        county: 'Pike',
      },
      {
        state: 'Illinois',
        city: 'Kinderhook',
        county: 'Pike',
      },
      {
        state: 'Illinois',
        city: 'New Canton',
        county: 'Pike',
      },
      {
        state: 'Illinois',
        city: 'Milton',
        county: 'Pike',
      },
      {
        state: 'Illinois',
        city: 'New Salem',
        county: 'Pike',
      },
      {
        state: 'Illinois',
        city: 'Baylis',
        county: 'Pike',
      },
      {
        state: 'Illinois',
        city: 'Pearl',
        county: 'Pike',
      },
      {
        state: 'Illinois',
        city: 'Rockport',
        county: 'Pike',
      },
      {
        state: 'Illinois',
        city: 'El Dara',
        county: 'Pike',
      },
      {
        state: 'Illinois',
        city: 'Valley city',
        county: 'Pike',
      },
      {
        state: 'Illinois',
        city: 'Detroit',
        county: 'Pike',
      },
      {
        state: 'Illinois',
        city: 'Florence',
        county: 'Pike',
      },
      {
        state: 'Illinois',
        city: 'Time',
        county: 'Pike',
      },
      {
        state: 'Illinois',
        city: 'Golconda',
        county: 'Pope',
      },
      {
        state: 'Illinois',
        city: 'Eddyville',
        county: 'Pope',
      },
      {
        state: 'Illinois',
        city: 'Mounds',
        county: 'Pulaski',
      },
      {
        state: 'Illinois',
        city: 'Mound city',
        county: 'Pulaski',
      },
      {
        state: 'Illinois',
        city: 'Ullin',
        county: 'Pulaski',
      },
      {
        state: 'Illinois',
        city: 'Karnak',
        county: 'Pulaski',
      },
      {
        state: 'Illinois',
        city: 'Olmsted',
        county: 'Pulaski',
      },
      {
        state: 'Illinois',
        city: 'Pulaski',
        county: 'Pulaski',
      },
      {
        state: 'Illinois',
        city: 'New Grand Chain',
        county: 'Pulaski',
      },
      {
        state: 'Illinois',
        city: 'Granville',
        county: 'Putnam',
      },
      {
        state: 'Illinois',
        city: 'Hennepin',
        county: 'Putnam',
      },
      {
        state: 'Illinois',
        city: 'Mark',
        county: 'Putnam',
      },
      {
        state: 'Illinois',
        city: 'Standard',
        county: 'Putnam',
      },
      {
        state: 'Illinois',
        city: 'Magnolia',
        county: 'Putnam',
      },
      {
        state: 'Illinois',
        city: 'McNabb',
        county: 'Putnam',
      },
      {
        state: 'Illinois',
        city: 'Chester',
        county: 'Randolph',
      },
      {
        state: 'Illinois',
        city: 'Sparta',
        county: 'Randolph',
      },
      {
        state: 'Illinois',
        city: 'Red Bud',
        county: 'Randolph',
      },
      {
        state: 'Illinois',
        city: 'Steeleville',
        county: 'Randolph',
      },
      {
        state: 'Illinois',
        city: 'Percy',
        county: 'Randolph',
      },
      {
        state: 'Illinois',
        city: 'Tilden',
        county: 'Randolph',
      },
      {
        state: 'Illinois',
        city: 'Evansville',
        county: 'Randolph',
      },
      {
        state: 'Illinois',
        city: 'Coulterville',
        county: 'Randolph',
      },
      {
        state: 'Illinois',
        city: 'Ruma',
        county: 'Randolph',
      },
      {
        state: 'Illinois',
        city: 'Prairie du Rocher',
        county: 'Randolph',
      },
      {
        state: 'Illinois',
        city: 'Ellis Grove',
        county: 'Randolph',
      },
      {
        state: 'Illinois',
        city: 'Baldwin',
        county: 'Randolph',
      },
      {
        state: 'Illinois',
        city: 'Kaskaskia',
        county: 'Randolph',
      },
      {
        state: 'Illinois',
        city: 'Rockwood',
        county: 'Randolph',
      },
      {
        state: 'Illinois',
        city: 'Olney',
        county: 'Richland',
      },
      {
        state: 'Illinois',
        city: 'Noble',
        county: 'Richland',
      },
      {
        state: 'Illinois',
        city: 'Dundas',
        county: 'Richland',
      },
      {
        state: 'Illinois',
        city: 'Parkersburg',
        county: 'Richland',
      },
      {
        state: 'Illinois',
        city: 'Calhoun',
        county: 'Richland',
      },
      {
        state: 'Illinois',
        city: 'Claremont',
        county: 'Richland',
      },
      {
        state: 'Illinois',
        city: 'Moline',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'Rock Island',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'East Moline',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'Silvis',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'Milan',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'Coal Valley',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'Port Byron',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'Carbon Cliff',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'Hampton',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'Andalusia',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'Coyne Center',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'Rapids city',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'Cordova',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'Reynolds',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'Hillsdale',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'Oak Grove',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'Rock Island Arsenal',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: "Campbell's Island",
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'Edgington',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'Taylor Ridge',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'Barstow',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'Illinois city',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'Joslin',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'Buffalo Prairie',
        county: 'Rock Island',
      },
      {
        state: 'Illinois',
        city: 'Harrisburg',
        county: 'Saline',
      },
      {
        state: 'Illinois',
        city: 'Eldorado',
        county: 'Saline',
      },
      {
        state: 'Illinois',
        city: 'Carrier Mills',
        county: 'Saline',
      },
      {
        state: 'Illinois',
        city: 'Galatia',
        county: 'Saline',
      },
      {
        state: 'Illinois',
        city: 'Stonefort',
        county: 'Saline',
      },
      {
        state: 'Illinois',
        city: 'Raleigh',
        county: 'Saline',
      },
      {
        state: 'Illinois',
        city: 'Muddy',
        county: 'Saline',
      },
      {
        state: 'Illinois',
        city: 'Springfield',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Chatham',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Auburn',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Sherman',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Rochester',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Riverton',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Pawnee',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Jerome',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Southern View',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Williamsville',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Grandview',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Leland Grove',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'New Berlin',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Divernon',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Loami',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Spaulding',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Illiopolis',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Mechanicsburg',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Pleasant Plains',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Dawson',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Thayer',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Clear Lake',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Buffalo',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Curran',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Berlin',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Cantrall',
        county: 'Sangamon',
      },
      {
        state: 'Illinois',
        city: 'Rushville',
        county: 'Schuyler',
      },
      {
        state: 'Illinois',
        city: 'Littleton',
        county: 'Schuyler',
      },
      {
        state: 'Illinois',
        city: 'Browning',
        county: 'Schuyler',
      },
      {
        state: 'Illinois',
        city: 'Camden',
        county: 'Schuyler',
      },
      {
        state: 'Illinois',
        city: 'Winchester',
        county: 'Scott',
      },
      {
        state: 'Illinois',
        city: 'Bluffs',
        county: 'Scott',
      },
      {
        state: 'Illinois',
        city: 'Manchester',
        county: 'Scott',
      },
      {
        state: 'Illinois',
        city: 'Alsey',
        county: 'Scott',
      },
      {
        state: 'Illinois',
        city: 'Naples',
        county: 'Scott',
      },
      {
        state: 'Illinois',
        city: 'Glasgow',
        county: 'Scott',
      },
      {
        state: 'Illinois',
        city: 'Exeter',
        county: 'Scott',
      },
      {
        state: 'Illinois',
        city: 'Oxville',
        county: 'Scott',
      },
      {
        state: 'Illinois',
        city: 'Merritt',
        county: 'Scott',
      },
      {
        state: 'Illinois',
        city: 'Riggston',
        county: 'Scott',
      },
      {
        state: 'Illinois',
        city: 'Shelbyville',
        county: 'Shelby',
      },
      {
        state: 'Illinois',
        city: 'Moweaqua',
        county: 'Shelby',
      },
      {
        state: 'Illinois',
        city: 'Windsor',
        county: 'Shelby',
      },
      {
        state: 'Illinois',
        city: 'Stewardson',
        county: 'Shelby',
      },
      {
        state: 'Illinois',
        city: 'Findlay',
        county: 'Shelby',
      },
      {
        state: 'Illinois',
        city: 'Strasburg',
        county: 'Shelby',
      },
      {
        state: 'Illinois',
        city: 'Tower Hill',
        county: 'Shelby',
      },
      {
        state: 'Illinois',
        city: 'Cowden',
        county: 'Shelby',
      },
      {
        state: 'Illinois',
        city: 'Sigel',
        county: 'Shelby',
      },
      {
        state: 'Illinois',
        city: 'Herrick',
        county: 'Shelby',
      },
      {
        state: 'Illinois',
        city: 'Oconee',
        county: 'Shelby',
      },
      {
        state: 'Illinois',
        city: 'Westervelt',
        county: 'Shelby',
      },
      {
        state: 'Illinois',
        city: 'Lakewood',
        county: 'Shelby',
      },
      {
        state: 'Illinois',
        city: 'Belleville',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: "O'Fallon",
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'East St. Louis',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Fairview Heights',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Swansea',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Shiloh',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Cahokia',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Mascoutah',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Lebanon',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Centreville',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Scott AFB',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Freeburg',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Smithton',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Caseyville',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Millstadt',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Dupo',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Washington Park',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Fairmont city',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'New Athens',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Alorton',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Marissa',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'St. Libory',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Brooklyn',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Lenzburg',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Fayetteville',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Summerfield',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'East Carondelet',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Sauget',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Floraville',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Paderborn',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Rentchler',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Darmstadt',
        county: 'St. Clair',
      },
      {
        state: 'Illinois',
        city: 'Wyoming',
        county: 'Stark',
      },
      {
        state: 'Illinois',
        city: 'Toulon',
        county: 'Stark',
      },
      {
        state: 'Illinois',
        city: 'Bradford',
        county: 'Stark',
      },
      {
        state: 'Illinois',
        city: 'La Fayette',
        county: 'Stark',
      },
      {
        state: 'Illinois',
        city: 'Freeport',
        county: 'Stephenson',
      },
      {
        state: 'Illinois',
        city: 'Lena',
        county: 'Stephenson',
      },
      {
        state: 'Illinois',
        city: 'Orangeville',
        county: 'Stephenson',
      },
      {
        state: 'Illinois',
        city: 'Pearl city',
        county: 'Stephenson',
      },
      {
        state: 'Illinois',
        city: 'Willow Lake',
        county: 'Stephenson',
      },
      {
        state: 'Illinois',
        city: 'Dakota',
        county: 'Stephenson',
      },
      {
        state: 'Illinois',
        city: 'Cedarville',
        county: 'Stephenson',
      },
      {
        state: 'Illinois',
        city: 'German Valley',
        county: 'Stephenson',
      },
      {
        state: 'Illinois',
        city: 'Davis',
        county: 'Stephenson',
      },
      {
        state: 'Illinois',
        city: 'Rock city',
        county: 'Stephenson',
      },
      {
        state: 'Illinois',
        city: 'Winslow',
        county: 'Stephenson',
      },
      {
        state: 'Illinois',
        city: 'Ridott',
        county: 'Stephenson',
      },
      {
        state: 'Illinois',
        city: 'Pekin',
        county: 'Tazewell',
      },
      {
        state: 'Illinois',
        city: 'East Peoria',
        county: 'Tazewell',
      },
      {
        state: 'Illinois',
        city: 'Morton',
        county: 'Tazewell',
      },
      {
        state: 'Illinois',
        city: 'Washington',
        county: 'Tazewell',
      },
      {
        state: 'Illinois',
        city: 'Creve Coeur',
        county: 'Tazewell',
      },
      {
        state: 'Illinois',
        city: 'Marquette Heights',
        county: 'Tazewell',
      },
      {
        state: 'Illinois',
        city: 'Tremont',
        county: 'Tazewell',
      },
      {
        state: 'Illinois',
        city: 'Mackinaw',
        county: 'Tazewell',
      },
      {
        state: 'Illinois',
        city: 'Delavan',
        county: 'Tazewell',
      },
      {
        state: 'Illinois',
        city: 'Heritage Lake',
        county: 'Tazewell',
      },
      {
        state: 'Illinois',
        city: 'North Pekin',
        county: 'Tazewell',
      },
      {
        state: 'Illinois',
        city: 'Minier',
        county: 'Tazewell',
      },
      {
        state: 'Illinois',
        city: 'South Pekin',
        county: 'Tazewell',
      },
      {
        state: 'Illinois',
        city: 'Green Valley',
        county: 'Tazewell',
      },
      {
        state: 'Illinois',
        city: 'Hopedale',
        county: 'Tazewell',
      },
      {
        state: 'Illinois',
        city: 'Deer Creek',
        county: 'Tazewell',
      },
      {
        state: 'Illinois',
        city: 'Armington',
        county: 'Tazewell',
      },
      {
        state: 'Illinois',
        city: 'Anna',
        county: 'Union',
      },
      {
        state: 'Illinois',
        city: 'Jonesboro',
        county: 'Union',
      },
      {
        state: 'Illinois',
        city: 'Cobden',
        county: 'Union',
      },
      {
        state: 'Illinois',
        city: 'Dongola',
        county: 'Union',
      },
      {
        state: 'Illinois',
        city: 'Alto Pass',
        county: 'Union',
      },
      {
        state: 'Illinois',
        city: 'Mill Creek',
        county: 'Union',
      },
      {
        state: 'Illinois',
        city: 'Danville',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'Hoopeston',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'Westville',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'Georgetown',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'Tilton',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'Catlin',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'Oakwood',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'Rossville',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'Ridge Farm',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'Potomac',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'Fairmount',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'Bismarck',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'Rankin',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'Fithian',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'Sidell',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'East Lynn',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'Olivet',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'Belgium',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'Henning',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'Indianola',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'Allerton',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'Alvan',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'Muncie',
        county: 'Vermilion',
      },
      {
        state: 'Illinois',
        city: 'Mount Carmel',
        county: 'Wabash',
      },
      {
        state: 'Illinois',
        city: 'Allendale',
        county: 'Wabash',
      },
      {
        state: 'Illinois',
        city: 'Bellmont',
        county: 'Wabash',
      },
      {
        state: 'Illinois',
        city: 'Keensburg',
        county: 'Wabash',
      },
      {
        state: 'Illinois',
        city: 'Monmouth',
        county: 'Warren',
      },
      {
        state: 'Illinois',
        city: 'Roseville',
        county: 'Warren',
      },
      {
        state: 'Illinois',
        city: 'Alexis',
        county: 'Warren',
      },
      {
        state: 'Illinois',
        city: 'Kirkwood',
        county: 'Warren',
      },
      {
        state: 'Illinois',
        city: 'Cameron',
        county: 'Warren',
      },
      {
        state: 'Illinois',
        city: 'Little York',
        county: 'Warren',
      },
      {
        state: 'Illinois',
        city: 'Nashville',
        county: 'Washington',
      },
      {
        state: 'Illinois',
        city: 'Okawville',
        county: 'Washington',
      },
      {
        state: 'Illinois',
        city: 'Wamac',
        county: 'Washington',
      },
      {
        state: 'Illinois',
        city: 'Irvington',
        county: 'Washington',
      },
      {
        state: 'Illinois',
        city: 'Hoyleton',
        county: 'Washington',
      },
      {
        state: 'Illinois',
        city: 'Ashley',
        county: 'Washington',
      },
      {
        state: 'Illinois',
        city: 'Addieville',
        county: 'Washington',
      },
      {
        state: 'Illinois',
        city: 'Oakdale',
        county: 'Washington',
      },
      {
        state: 'Illinois',
        city: 'Richview',
        county: 'Washington',
      },
      {
        state: 'Illinois',
        city: 'New Minden',
        county: 'Washington',
      },
      {
        state: 'Illinois',
        city: 'Du Bois',
        county: 'Washington',
      },
      {
        state: 'Illinois',
        city: 'Radom',
        county: 'Washington',
      },
      {
        state: 'Illinois',
        city: 'Venedy',
        county: 'Washington',
      },
      {
        state: 'Illinois',
        city: 'Fairfield',
        county: 'Wayne',
      },
      {
        state: 'Illinois',
        city: 'Wayne city',
        county: 'Wayne',
      },
      {
        state: 'Illinois',
        city: 'Cisne',
        county: 'Wayne',
      },
      {
        state: 'Illinois',
        city: 'Jeffersonville',
        county: 'Wayne',
      },
      {
        state: 'Illinois',
        city: 'Sims',
        county: 'Wayne',
      },
      {
        state: 'Illinois',
        city: 'Mount Erie',
        county: 'Wayne',
      },
      {
        state: 'Illinois',
        city: 'Golden Gate',
        county: 'Wayne',
      },
      {
        state: 'Illinois',
        city: 'Keenes',
        county: 'Wayne',
      },
      {
        state: 'Illinois',
        city: 'Johnsonville',
        county: 'Wayne',
      },
      {
        state: 'Illinois',
        city: 'Carmi',
        county: 'White',
      },
      {
        state: 'Illinois',
        city: 'Grayville',
        county: 'White',
      },
      {
        state: 'Illinois',
        city: 'Norris city',
        county: 'White',
      },
      {
        state: 'Illinois',
        city: 'Crossville',
        county: 'White',
      },
      {
        state: 'Illinois',
        city: 'Enfield',
        county: 'White',
      },
      {
        state: 'Illinois',
        city: 'Mill Shoals',
        county: 'White',
      },
      {
        state: 'Illinois',
        city: 'Maunie',
        county: 'White',
      },
      {
        state: 'Illinois',
        city: 'Burnt Prairie',
        county: 'White',
      },
      {
        state: 'Illinois',
        city: 'Springerton',
        county: 'White',
      },
      {
        state: 'Illinois',
        city: 'Phillipstown',
        county: 'White',
      },
      {
        state: 'Illinois',
        city: 'Sterling',
        county: 'Whiteside',
      },
      {
        state: 'Illinois',
        city: 'Rock Falls',
        county: 'Whiteside',
      },
      {
        state: 'Illinois',
        city: 'Morrison',
        county: 'Whiteside',
      },
      {
        state: 'Illinois',
        city: 'Fulton',
        county: 'Whiteside',
      },
      {
        state: 'Illinois',
        city: 'Prophetstown',
        county: 'Whiteside',
      },
      {
        state: 'Illinois',
        city: 'Erie',
        county: 'Whiteside',
      },
      {
        state: 'Illinois',
        city: 'Albany',
        county: 'Whiteside',
      },
      {
        state: 'Illinois',
        city: 'Tampico',
        county: 'Whiteside',
      },
      {
        state: 'Illinois',
        city: 'Como',
        county: 'Whiteside',
      },
      {
        state: 'Illinois',
        city: 'Lyndon',
        county: 'Whiteside',
      },
      {
        state: 'Illinois',
        city: 'Galt',
        county: 'Whiteside',
      },
      {
        state: 'Illinois',
        city: 'Coleta',
        county: 'Whiteside',
      },
      {
        state: 'Illinois',
        city: 'Deer Grove',
        county: 'Whiteside',
      },
      {
        state: 'Illinois',
        city: 'Joliet',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Bolingbrook',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Plainfield',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Romeoville',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'New Lenox',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Lockport',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Homer Glen',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Crest Hill',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Frankfort',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Mokena',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Shorewood',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Channahon',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Manhattan',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Frankfort Square',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Crete',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'University Park',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Braidwood',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Wilmington',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Monee',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Beecher',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Peotone',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Ingalls Park',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Ridgewood',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Fairmont',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Preston Heights',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Elwood',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Rockdale',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Crystal Lawns',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Arbury Hills',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Bonnie Brae',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Lockport Heights',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Braceville',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Godley',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Lakewood Shores',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Rest Haven',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Sunnyland',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Custer Park',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Plum Valley',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Ritchie',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Wilton Center',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Eagle Lake',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Goodenow',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Symerton',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Andres',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Marley',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Lorenzo',
        county: 'Will',
      },
      {
        state: 'Illinois',
        city: 'Marion',
        county: 'Williamson',
      },
      {
        state: 'Illinois',
        city: 'Herrin',
        county: 'Williamson',
      },
      {
        state: 'Illinois',
        city: 'Carterville',
        county: 'Williamson',
      },
      {
        state: 'Illinois',
        city: 'Johnston city',
        county: 'Williamson',
      },
      {
        state: 'Illinois',
        city: 'Crainville',
        county: 'Williamson',
      },
      {
        state: 'Illinois',
        city: 'Energy',
        county: 'Williamson',
      },
      {
        state: 'Illinois',
        city: 'Cambria',
        county: 'Williamson',
      },
      {
        state: 'Illinois',
        city: 'Hurst',
        county: 'Williamson',
      },
      {
        state: 'Illinois',
        city: 'Pittsburg',
        county: 'Williamson',
      },
      {
        state: 'Illinois',
        city: 'Creal Springs',
        county: 'Williamson',
      },
      {
        state: 'Illinois',
        city: 'Bush',
        county: 'Williamson',
      },
      {
        state: 'Illinois',
        city: 'Colp',
        county: 'Williamson',
      },
      {
        state: 'Illinois',
        city: 'Blairsville',
        county: 'Williamson',
      },
      {
        state: 'Illinois',
        city: 'Crab Orchard',
        county: 'Williamson',
      },
      {
        state: 'Illinois',
        city: 'Spillertown',
        county: 'Williamson',
      },
      {
        state: 'Illinois',
        city: 'Whiteash',
        county: 'Williamson',
      },
      {
        state: 'Illinois',
        city: 'Rockford',
        county: 'Winnebago',
      },
      {
        state: 'Illinois',
        city: 'Loves Park',
        county: 'Winnebago',
      },
      {
        state: 'Illinois',
        city: 'Machesney Park',
        county: 'Winnebago',
      },
      {
        state: 'Illinois',
        city: 'Roscoe',
        county: 'Winnebago',
      },
      {
        state: 'Illinois',
        city: 'Rockton',
        county: 'Winnebago',
      },
      {
        state: 'Illinois',
        city: 'South Beloit',
        county: 'Winnebago',
      },
      {
        state: 'Illinois',
        city: 'Winnebago',
        county: 'Winnebago',
      },
      {
        state: 'Illinois',
        city: 'Cherry Valley',
        county: 'Winnebago',
      },
      {
        state: 'Illinois',
        city: 'Lake Summerset',
        county: 'Winnebago',
      },
      {
        state: 'Illinois',
        city: 'Pecatonica',
        county: 'Winnebago',
      },
      {
        state: 'Illinois',
        city: 'Westlake Village',
        county: 'Winnebago',
      },
      {
        state: 'Illinois',
        city: 'Durand',
        county: 'Winnebago',
      },
      {
        state: 'Illinois',
        city: 'New Milford',
        county: 'Winnebago',
      },
      {
        state: 'Illinois',
        city: 'Eureka',
        county: 'Woodford',
      },
      {
        state: 'Illinois',
        city: 'Metamora',
        county: 'Woodford',
      },
      {
        state: 'Illinois',
        city: 'Germantown Hills',
        county: 'Woodford',
      },
      {
        state: 'Illinois',
        city: 'El Paso',
        county: 'Woodford',
      },
      {
        state: 'Illinois',
        city: 'Minonk',
        county: 'Woodford',
      },
      {
        state: 'Illinois',
        city: 'Roanoke',
        county: 'Woodford',
      },
      {
        state: 'Illinois',
        city: 'Washburn',
        county: 'Woodford',
      },
      {
        state: 'Illinois',
        city: 'Goodfield',
        county: 'Woodford',
      },
      {
        state: 'Illinois',
        city: 'Congerville',
        county: 'Woodford',
      },
      {
        state: 'Illinois',
        city: 'Spring Bay',
        county: 'Woodford',
      },
      {
        state: 'Illinois',
        city: 'Bay View Gardens',
        county: 'Woodford',
      },
      {
        state: 'Illinois',
        city: 'Benson',
        county: 'Woodford',
      },
      {
        state: 'Illinois',
        city: 'Secor',
        county: 'Woodford',
      },
      {
        state: 'Illinois',
        city: 'Kappa',
        county: 'Woodford',
      },
      {
        state: 'Illinois',
        city: 'Lowpoint',
        county: 'Woodford',
      },
      {
        state: 'Illinois',
        city: 'Panola',
        county: 'Woodford',
      },
      {
        state: 'Illinois',
        city: 'Newport Township',
        county: 'Lake',
      },
      {
        state: 'Illinois',
        city: 'Ingleside',
        county: 'Lake',
      },
      {
        state: '',
        city: '',
        county: '',
      },
      {
        state: 'Massachusetts',
        city: 'Barnstable',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Bass River',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Bourne',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Brewster',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Buzzards Bay',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Cataumet',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Centerville',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Chatham',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Cotuit',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Cummaquid',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Dennis',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Dennis Port',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Ea Falmouth',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'East Dennis',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'East Falmouth',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'East Harwich',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'East Orleans',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'East Sandwich',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Eastham',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Falmouth',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Forestdale',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Harwich',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Harwich Port',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Hatchville',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Hyannis',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Hyannis Port',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Marstons Mills',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Mashpee',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Monument Beach',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'New Seabury',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'North Chatham',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'North Eastham',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'North Falmouth',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'North Truro',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Orleans',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Osterville',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Otis Air National Guard',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Pocasset',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Provincetown',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Sagamore',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Sagamore Beach',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Sandwich',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Silver Beach',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'So Yarmouth',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'South Chatham',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'South Dennis',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'South Harwich',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'South Mashpee',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'South Orleans',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'South Wellfleet',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'South Yarmouth',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Teaticket',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Truro',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Waquoit',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Wellfleet',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'West Barnstable',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'West Chatham',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'West Dennis',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'West Falmouth',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'West Harwich',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'West Hyannisport',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'West Yarmouth',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Woods Hole',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Yarmouth',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Yarmouth Port',
        county: 'Barnstable',
      },
      {
        state: 'Massachusetts',
        city: 'Adams',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Alford',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Allendale',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Ashley Falls',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Assoc of Marian Helpers',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Becket',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Becket Corners',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Berkshire',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Berkshire Heights',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Big Pond',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Charlemont',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Cheshire',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Clarksburg',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Cold Spring',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Dalton',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Drury',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'East Otis',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'East Windsor',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Egremont',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Florida',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Glendale',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Great Barrington',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Gt Barrington',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Hancock',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Hartsville',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Hinsdale',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Housatonic',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Interlaken',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Lanesboro',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Lee',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Lenox',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Lenox Dale',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Marian Helpers',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Marion Fathers',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Mill River',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Monterey',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Mount Washington',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'New Ashford',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'New Marlboro',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'North Adams',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'North Egremont',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'North Otis',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Otis',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Peru',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Pittsfield',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Richmond',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Risingdale',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Sandisfield',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Savoy',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Sheffield',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Sherwood Forest',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Simons Rock',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'So Egremont',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'South Egremont',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'South Lee',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'South Sandisfield',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Southfield',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Stockbridge',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Tyringham',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Van Deusenville',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Washington',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'West Becket',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'West Otis',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'West Stockbridge',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'West Stockbridge Center',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Williamstn',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Williamstown',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Windsor',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Wmstown',
        county: 'Berkshire',
      },
      {
        state: 'Massachusetts',
        city: 'Acushnet',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Assonet',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Attleboro',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Attleboro Falls',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Berkley',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Chadwicks',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Chartley',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Dartmouth',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Dighton',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'East Freetown',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'East Mansfield',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'East Taunton',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Easton',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Fairhaven',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Fall River',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Freetown',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Horseneck Beach',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Mansfield',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'New Bedford',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Nonquitt',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'North Attleboro',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'North Dartmouth',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'North Dighton',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'North Easton',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Norton',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Padanaram The Packet',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Raynham',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Raynham Center',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Rehoboth',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Seekonk',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Somerset',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'South Attleboro',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'South Dartmouth',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'South Easton',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Stonehill College',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Swansea',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Taunton',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Westport',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Westport Point',
        county: 'Bristol',
      },
      {
        state: 'Massachusetts',
        city: 'Aquinnah',
        county: 'Dukes',
      },
      {
        state: 'Massachusetts',
        city: 'Chappaquiddick Island',
        county: 'Dukes',
      },
      {
        state: 'Massachusetts',
        city: 'Chilmark',
        county: 'Dukes',
      },
      {
        state: 'Massachusetts',
        city: 'Cuttyhunk',
        county: 'Dukes',
      },
      {
        state: 'Massachusetts',
        city: 'Edgartown',
        county: 'Dukes',
      },
      {
        state: 'Massachusetts',
        city: 'Gay Head',
        county: 'Dukes',
      },
      {
        state: 'Massachusetts',
        city: 'Gosnold',
        county: 'Dukes',
      },
      {
        state: 'Massachusetts',
        city: 'Menemsha',
        county: 'Dukes',
      },
      {
        state: 'Massachusetts',
        city: 'North Tisbury',
        county: 'Dukes',
      },
      {
        state: 'Massachusetts',
        city: 'Oak Bluffs',
        county: 'Dukes',
      },
      {
        state: 'Massachusetts',
        city: 'Tisbury',
        county: 'Dukes',
      },
      {
        state: 'Massachusetts',
        city: 'Vineyard Haven',
        county: 'Dukes',
      },
      {
        state: 'Massachusetts',
        city: 'West Chop',
        county: 'Dukes',
      },
      {
        state: 'Massachusetts',
        city: 'West Tisbury',
        county: 'Dukes',
      },
      {
        state: 'Massachusetts',
        city: 'Amesbury',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Andover',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Bar Coded I R S',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Beverly',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Beverly Farms',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Boxford',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Bradford',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Byfield',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Danvers',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'East Lynn',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Essex',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'General Elec Co',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Georgetown',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Gloucester',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Groveland',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Hamilton',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Hathorne',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Haverhill',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Internal Revenue Service',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Ipswich',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'IRS Service Center',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'IRS Service Center',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Lawrence',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Lynn',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Lynnfield',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Magnolia',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Manchester',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Manchester by the Sea',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Marblehead',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Merrimac',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Methuen',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Mhead',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Middleton',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Nahant',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Newbury',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Newburyport',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'North Andover',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Peabody',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Peabody',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Pigeon Cove',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Plum Island',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Prides Crossing',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Rockport',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Rowley',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Salem',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Salisbury',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Salisbury Beach',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Saugus',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'South Hamilton',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'South Lawrence',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'South Lynnfield',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Swampscott',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Topsfield',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Ward Hill',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Wenham',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'West Boxford',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'West Lynn',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'West Newbury',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'West Peabody',
        county: 'Essex',
      },
      {
        state: 'Massachusetts',
        city: 'Ashfield',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Baptist Corner',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Bernardston',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Blissville',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Buckland',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Charlemont',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Colrain',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Conway',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Deerfield',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Eagleville',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'East Charlemont',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'East Deerfield',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'East Leverett',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Erving',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Farley',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Gill',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Greenfield',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Hawley',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Heath',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Hoosac Tunnel',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Lake Mattawa',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Lake Pleasant',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Leverett',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Leyden',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Millers Falls',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Monroe',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Monroe Bridge',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Montague',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Mount Hermon',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'New Salem',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'North Field',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'North Leverett',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'North Orange',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Northfield',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Northfield Mount Hermon',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Orange',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Rowe',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Shattuckville',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Shelburne',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Shelburne Falls',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Shutesbury',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'So Deerfield',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'South Ashfield',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'South Deerfield',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Stoneville',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Sunderland',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Turners Falls',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Warwick',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Wendell',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Wendell Depot',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'West Deerfield',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'West Hawley',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Whately',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Zoar',
        county: 'Franklin',
      },
      {
        state: 'Massachusetts',
        city: 'Agawam',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Bay state W Tower',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Baystate Medical',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Blandford',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Bondsville',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Brightwood',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Brimfield',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Chester',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Chicopee',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'East Brimfield',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'East Longmeadow',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Feeding Hills',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Fiskdale',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'General Mail Facility-Bmc',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Granville',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Granville Center',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Halland',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Halyoke',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Hampden',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Hampton',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Holland',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Holyoke',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Indian Orchard',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Longmeadow',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Ludlow',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Mass Mutual Life Ins Co',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Monson',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Montgomery',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Palmer',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Russell',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Southwick',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Springfield',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Thorndike',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Three Rivers',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Tolland',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Wales',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'West Granville',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'West Springfield',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Westfield',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Westover AFB',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Wilbraham',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Willimansett',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Woronoco',
        county: 'Hampden',
      },
      {
        state: 'Massachusetts',
        city: 'Amherst',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Bay state Village',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Belchertown',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Chesterfield',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Crescent Mills',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Cummington',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Cushman',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'East Hampton',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Florence',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Goshen',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Granby',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Hadley',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Hatfield',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Haydenville',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Hntgtn',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Huntington',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Knightville',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Leeds',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Lithia',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Loudville',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Middlefield',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Montgomery',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Mount Tom',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'North Amherst',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'North Chester',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'North Hadley',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'North Hampton',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'North Hatfield',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Northampton',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Pelham',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Plainfield',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Smith College',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'South Amherst',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'South Chesterfield',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'South Hadley',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'South Hadley Falls',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'South Worthington',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Southampton',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Ware',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'West Chesterfield',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'West Cummington',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'West Hatfield',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'West Whately',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Westhampton',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Williamsburg',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Worthington',
        county: 'Hampshire',
      },
      {
        state: 'Massachusetts',
        city: 'Acton',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Arlington',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Arlington Heights',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Ashby',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Ashland',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Auburndale',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Ayer',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Bank of America',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Bedford',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Belmont',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Billerica',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Boston College',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Boxborough',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Brookline',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Burlington',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Cambridge',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Carlisle',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Chelmsford',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Cherry Brook',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Chestnut Hill',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Cochituate',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Concord',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Devens',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Dracut',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Dunstable',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'East Arlington',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'East Cambridge',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'East Pepperell',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'East Somerville',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'East Watertown',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Everett',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Field Premium Inc',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Forge Village',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Fort Devens',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Framingham',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Framingham Center',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Framingham So',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Groton',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Hanscom AFB',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Harvard Square',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Hastings',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Holliston',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Hopkinton',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Hudson',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Inman Square',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Kates Corner',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Kendal Green',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Kendall Square',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Lahey Clinic Med Center',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Lexington',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Lincoln',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Lincoln Center',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Littleton',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Lowell',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Malden',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Marlborough',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Massachusetts District',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Maynard',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Medford',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Mellon Financial Services',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Melrose',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Nabnasset',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Natick',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'National Grid',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'New England Business',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'New England Business Svc Inc',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'New Town',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Newton',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Newton Center',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Newton Highlands',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Newton Lower Falls',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Newton Upper Falls',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Newtonville',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Nonantum',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'North Billerica',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'North Cambridge',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'North Chelmsford',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'North Natick',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'North Reading',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'North Sudbury',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'North Waltham',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Nutting Lake',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Nuttings Lake',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Pepperell',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Pinehurst',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Pingryville',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Porter Square',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Reading',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Riverside',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Saxonville',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Sherborn',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Shirley',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Shirley Center',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Silver Hill',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Somerville',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'South Chelmsford',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'South Natick',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'South Waltham',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Stoneham',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Stony Brook',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Stow',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Sudbury',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Tewksbury',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Townsend',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Tufts University',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Tyngsboro',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Village of Nagog Woods',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Waban',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Wakefield',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Waltham',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Watertown',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Watertown Financial',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Waverley',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Wayland',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'West Acton',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'West Concord',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'West Groton',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'West Medford',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'West Newton',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'West Somerville',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'West Townsend',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Westford',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Weston',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Wilmington',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Winchester',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Winter Hill',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Woburn',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Woodville',
        county: 'Middlesex',
      },
      {
        state: 'Massachusetts',
        city: 'Nantucket',
        county: 'Nantucket',
      },
      {
        state: 'Massachusetts',
        city: 'Sconset',
        county: 'Nantucket',
      },
      {
        state: 'Massachusetts',
        city: 'Siasconset',
        county: 'Nantucket',
      },
      {
        state: 'Massachusetts',
        city: 'Avon',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Babson Park',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Bellingham',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Braintree',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Braintree Highlands',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Braintree Phantom',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Brookline',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Brookline Village',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Canton',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Cohasset',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Dedham',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Dover',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'East Braintree',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'East Milton',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'East Walpole',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'East Weymouth',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Foxboro',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Franklin',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Holbrook',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Houghs Neck',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Islington',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Marina Bay',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Medfield',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Medway',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Millis',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Milton',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Milton Village',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Needham',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Needham Heights',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Needham Jct',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'No Quincy',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Norfolk',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Norfolk Downs',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'North Attleboro',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'North Quincy',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'North Weymouth',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Norwood',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Plainville',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Quincy',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Quincy Center',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Randolph',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Sharon',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Sheldonville',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'South Quincy',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'South Walpole',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'South Weymouth',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Squantum',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Stoughton',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Walpole',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Wellesley',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Wellesley Hills',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'West Quincy',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Westwood',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Weymouth',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Weymouth Lndg',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Weymouth NAS',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Wollaston',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Wrentham',
        county: 'Norfolk',
      },
      {
        state: 'Massachusetts',
        city: 'Abington',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Accord',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Aetna Life & Casualty Co',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Assinippi',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Brant Rock',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Bridgewater',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Bridgewater state College',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Brockton',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Bryantville',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Carver',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Cedarville',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Duxbury',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Duxbury',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'East Bridgewater',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'East Carver',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'East Pembroke',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'East Wareham',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Elmwood',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Green Harbor',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Greenbush',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Halifax',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Hanover',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Hanson',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Hingham',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Hull',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Humarock',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Kingston',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Lakeville',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Lakeville Phantom',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Manomet',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Marion',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Marshfield',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Marshfield Hills',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Mattapoisett',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Middleboro',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Minot',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Monponsett',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Nantasket Beach',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'North Carver',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'North Marshfield',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'North Pembroke',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'North Scituate',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Norwell',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Ocean Bluff',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Ocean Spray',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Onset',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Pembroke',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Plymouth',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Plympton',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Rochester',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Rockland',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Rocky Nook',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Scituate',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Scituate Center',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Scituate Harbor',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Shared Firm Zip Code',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Silver Lake',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'South Carver',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Talbots',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Wareham',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Wearguard',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'West Bridgewater',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'West Hanover',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'West Wareham',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'White Horse Beach',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Whitman',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Wht Horse Bch',
        county: 'Plymouth',
      },
      {
        state: 'Massachusetts',
        city: 'Allston',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Bank of America',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Beachmont',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Boston',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Boston city Hall',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Boston Financial Data Servic',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Boston University',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Brighton',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Cambridge',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Cash Management',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Charlestown',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Chelsea',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Dorchester',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Dorchester Center',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'East Boston',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Fidelity Service Company',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Fleet Bank Boston',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Grove Hall',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Hyde Park',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Jamaica Plain',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'John Hancock Mutual Ins',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'John Hancock P O Box 505',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Kenmore',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Mass Tax',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Massachusetts Tax',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Mattapan',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Mission Hill',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Readville',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Revere',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Revere Beach',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Roslindale',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Roxbury',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Roxbury Crossing',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Soldiers Field',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'South Boston',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'state Street Corporation',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Uphams Corner',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'West Roxbury',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Winthrop',
        county: 'Suffolk',
      },
      {
        state: 'Massachusetts',
        city: 'Allmerica',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Ashburnham',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Athol',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Auburn',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Baldwinville',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Barre',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Berlin',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Blackstone',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Bolton',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Boylston',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Brookfield',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Central Mass P & D Center',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Charlton',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Charlton city',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Charlton Depot',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Cherry Valley',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Clinton',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Douglas',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Dudley',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Dudley Hill',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'East Blackstone',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'East Brookfield',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'East Douglas',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'East Millbury',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'East Princeton',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'East Templeton',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Edgemere',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'EMC',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Fayville',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Fiskdale',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Fitchburg',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Gardner',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Gilbertville',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Globe Village',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Grafton',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Greendale',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Hardwick',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Harvard',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Hassanamisco Indian Reservat',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Holden',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Hopedale',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Hubbardston',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Jefferson',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Lambs Grove',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Lancaster',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Leicester',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Leominster',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Linwood',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Lunenburg',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Manchaug',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Mendon',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Milford',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Millbury',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Millerville',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Millville',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Morningdale',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'National Grid Co',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'New Braintree',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'North Brookfield',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'North Grafton',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'North Lancaster',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'North Oxford',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'North Uxbridge',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Northborough',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Northbridge',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Oakdale',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Oakham',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Old Furnace',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Otter River',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Oxford',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Paxton',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Petersham',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Phillipston',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Princeton',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Richardson Corners',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Rochdale',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Royalston',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Rutland',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Sandersdale',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Saundersville',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Shrewsbury',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'South Ashburnham',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'South Barre',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'South Grafton',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'South Lancaster',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'South Royalston',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Southborough',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Southbridge',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Spencer',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Sterling',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Sterling Junction',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Still River',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Sturbridge',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Sutton',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Templeton',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Tyco',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Upton',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Uxbridge',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Verizon',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Warren',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Webster',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Webster Square',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'West Boylston',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'West Brookfield',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'West Millbury',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'West Side',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'West Upton',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'West Warren',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Westborough',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Westboylston',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Westbrookfield',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Westminster',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Wheelwright',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Whitinsville',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Wilkinsonvile',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Winchdon Springs',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Winchendon',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Winchendon Springs',
        county: 'Worcester',
      },
      {
        state: 'Massachusetts',
        city: 'Worcester',
        county: 'Worcester',
      },
    ]);
  }
}
