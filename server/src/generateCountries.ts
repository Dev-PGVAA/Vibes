import { Logger } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

import 'dotenv/config'

const prisma = new PrismaClient()

const countries = [
	{
		name: 'Abkhazia',
		icon: 'https://localhost:4200/uploads/countries/abkhazia.svg'
	},
	{
		name: 'Afghanistan',
		icon: 'https://localhost:4200/uploads/countries/afghanistan.svg'
	},
	{
		name: 'Aland Islands',
		icon: 'https://localhost:4200/uploads/countries/aland-islands.svg'
	},	
	{
		name: 'Albania',
		icon: 'https://localhost:4200/uploads/countries/albania.svg'
	},
	{
		name: 'Algeria',
		icon: 'https://localhost:4200/uploads/countries/algeria.svg'
	},
	{
		name: 'American Samoa',
		icon: 'https://localhost:4200/uploads/countries/american-samoa.svg'
	},
	{
		name: 'Andorra',
		icon: 'https://localhost:4200/uploads/countries/andorra.svg'
	},
	{
		name: 'Angola',
		icon: 'https://localhost:4200/uploads/countries/angola.svg'
	},
	{
		name: 'Antigua and Barbuda',
		icon: 'https://localhost:4200/uploads/countries/antigua-and-barbuda.svg'
	},
	{
		name: 'Argentina',
		icon: 'https://localhost:4200/uploads/countries/argentina.svg'
	},
	{
		name: 'Armenia',
		icon: 'https://localhost:4200/uploads/countries/armenia.svg'
	},	
	{
		name: 'Aruba',
		icon: 'https://localhost:4200/uploads/countries/aruba.svg'
	},
	{
		name: 'Australia',
		icon: 'https://localhost:4200/uploads/countries/australia.svg'
	},	
	{
		name: 'Austria',
		icon: 'https://localhost:4200/uploads/countries/austria.svg'
	},	
	{
		name: 'Azerbaijan',
		icon: 'https://localhost:4200/uploads/countries/azerbaijan.svg'
	},	
	{
		name: 'Azores islands',
		icon: 'https://localhost:4200/uploads/countries/azores-islands.svg'
	},
	{
		name: 'Bahamas',
		icon: 'https://localhost:4200/uploads/countries/bahamas.svg'
	},
	{
		name: 'Bahrain',
		icon: 'https://localhost:4200/uploads/countries/bahrain.svg'
	},	
	{
		name: 'Balearic islands',
		icon: 'https://localhost:4200/uploads/countries/balearic-islands.svg'
	},
	{
		name: 'Bangladesh',
		icon: 'https://localhost:4200/uploads/countries/bangladesh.svg'
	},
	{
		name: 'Barbados',
		icon: 'https://localhost:4200/uploads/countries/barbados.svg'
	},	
	{
		name: 'Basque',
		icon: 'https://localhost:4200/uploads/countries/basque.svg'
	},	
	{
		name: 'Belarus',
		icon: 'https://localhost:4200/uploads/countries/belarus.svg'
	},
	{
		name: 'Belgium',
		icon: 'https://localhost:4200/uploads/countries/belgium.svg'
	},	
	{
		name: 'Belize',
		icon: 'https://localhost:4200/uploads/countries/belize.svg'
	},	
	{
		name: 'Benin',
		icon: 'https://localhost:4200/uploads/countries/benin.svg'
	},
	{
		name: 'Bermuda',
		icon: 'https://localhost:4200/uploads/countries/bermuda.svg'
	},
	{
		name: 'Bhutan',
		icon: 'https://localhost:4200/uploads/countries/bhutan.svg'
	},
	{
		name: 'Bolivia',
		icon: 'https://localhost:4200/uploads/countries/bolivia.svg'
	},	
	{
		name: 'Bonaire',
		icon: 'https://localhost:4200/uploads/countries/bonaire.svg'
	},
	{
		name: 'Bosnia and Herzegovina',
		icon: 'https://localhost:4200/uploads/countries/bosnia-and-herzegovina.svg'
	},
	{
		name: 'Botswana',
		icon: 'https://localhost:4200/uploads/countries/botswana.svg'
	},
	{
		name: 'Brazil',
		icon: 'https://localhost:4200/uploads/countries/brazil.svg'
	},	
	{
		name: 'British Columbia',
		icon: 'https://localhost:4200/uploads/countries/british-columbia.svg'
	},
	{
		name: 'British Indian Ocean Territory',
		icon: 'https://localhost:4200/uploads/countries/british-indian-ocean-territory.svg'
	},
	{
		name: 'British Virgin Islands',
		icon: 'https://localhost:4200/uploads/countries/british-virgin-islands.svg'
	},
	{
		name: 'Brunei',
		icon: 'https://localhost:4200/uploads/countries/brunei.svg'
	},
	{
		name: 'Bulgaria',
		icon: 'https://localhost:4200/uploads/countries/bulgaria.svg'
	},	
	{
		name: 'Burkina Faso',
		icon: 'https://localhost:4200/uploads/countries/burkina-faso.svg'
	},	
	{
		name: 'Burundi',
		icon: 'https://localhost:4200/uploads/countries/burundi.svg'
	},
	{
		name: 'Cambodia',
		icon: 'https://localhost:4200/uploads/countries/cambodia.svg'
	},
	{
		name: 'Cameroon',
		icon: 'https://localhost:4200/uploads/countries/cameroon.svg'
	},
	{
		name: 'Canada',
		icon: 'https://localhost:4200/uploads/countries/canada.svg'
	},	
	{
		name: 'Canary Islands',
		icon: 'https://localhost:4200/uploads/countries/canary-islands.svg'
	},
	{
		name: 'Cape Verde',
		icon: 'https://localhost:4200/uploads/countries/cape-verde.svg'
	},
	{
		name: 'Cayman Islands',
		icon: 'https://localhost:4200/uploads/countries/cayman-islands.svg'
	},
	{
		name: 'Central African Republic',
		icon: 'https://localhost:4200/uploads/countries/central-african-republic.svg'
	},	
	{
		name: 'Ceuta',
		icon: 'https://localhost:4200/uploads/countries/ceuta.svg'
	},	
	{
		name: 'Chad',
		icon: 'https://localhost:4200/uploads/countries/chad.svg'
	},	
	{
		name: 'Chile',
		icon: 'https://localhost:4200/uploads/countries/chile.svg'
	},	
	{
		name: 'China',
		icon: 'https://localhost:4200/uploads/countries/china.svg'
	},	
	{
		name: 'Christmas Island',
		icon: 'https://localhost:4200/uploads/countries/christmas-island.svg'
	},	
	{
		name: 'Cocos Island',
		icon: 'https://localhost:4200/uploads/countries/cocos-island.svg'
	},	
	{
		name: 'Colombia',
		icon: 'https://localhost:4200/uploads/countries/colombia.svg'
	},	
	{
		name: 'Comoros',
		icon: 'https://localhost:4200/uploads/countries/comoros.svg'
	},	
	{
		name: 'Cook Islands',
		icon: 'https://localhost:4200/uploads/countries/cook-islands.svg'
	},	
	{
		name: 'Corsica',
		icon: 'https://localhost:4200/uploads/countries/corsica.svg'
	},	
	{
		name: 'Costa Rica',
		icon: 'https://localhost:4200/uploads/countries/costa-rica.svg'
	},	
	{
		name: 'Croatia',
		icon: 'https://localhost:4200/uploads/countries/croatia.svg'
	},	
	{
		name: 'Cuba',
		icon: 'https://localhost:4200/uploads/countries/cuba.svg'
	},	
	{
		name: 'Curacao',
		icon: 'https://localhost:4200/uploads/countries/curacao.svg'
	},	
	{
		name: 'Czech republic',
		icon: 'https://localhost:4200/uploads/countries/czech-republic.svg'
	},	
	{
		name: 'Democratic republic of congo',
		icon: 'https://localhost:4200/uploads/countries/democratic-republic-of-congo.svg'
	},	
	{
		name: 'Denmark',
		icon: 'https://localhost:4200/uploads/countries/denmark.svg'
	},	
	{
		name: 'Djibouti',
		icon: 'https://localhost:4200/uploads/countries/djibouti.svg'
	},	
	{
		name: 'Dominica',
		icon: 'https://localhost:4200/uploads/countries/dominica.svg'
	},
	{
		name: 'Dominican Republic',
		icon: 'https://localhost:4200/uploads/countries/dominican-republic.svg'
	},
	{
		name: 'East timor',
		icon: 'https://localhost:4200/uploads/countries/east-timor.svg'
	},
	{
		name: 'Ecuador',
		icon: 'https://localhost:4200/uploads/countries/ecuador.svg'
	},
	{
		name: 'Egypt',
		icon: 'https://localhost:4200/uploads/countries/egypt.svg'
	},
	{
		name: 'El Salvador',
		icon: 'https://localhost:4200/uploads/countries/el-salvador.svg'
	},
	{
		name: 'England',
		icon: 'https://localhost:4200/uploads/countries/england.svg'
	},
	{
		name: 'Equatorial Guinea',
		icon: 'https://localhost:4200/uploads/countries/equatorial-guinea.svg'
	},
	{
		name: 'Eritrea',
		icon: 'https://localhost:4200/uploads/countries/eritrea.svg'
	},
	{
		name: 'Estonia',
		icon: 'https://localhost:4200/uploads/countries/estonia.svg'
	},
	{
		name: 'Ethiopia',
		icon: 'https://localhost:4200/uploads/countries/ethiopia.svg'
	},
	{
		name: 'European Union',
		icon: 'https://localhost:4200/uploads/countries/european-union.svg'
	},
	{
		name: 'Falkland Islands',
		icon: 'https://localhost:4200/uploads/countries/falkland-islands.svg'
	},
	{
		name: 'Fiji',
		icon: 'https://localhost:4200/uploads/countries/fiji.svg'
	},
	{
		name: 'Finland',
		icon: 'https://localhost:4200/uploads/countries/finland.svg'
	},
	{
		name: 'France',
		icon: 'https://localhost:4200/uploads/countries/france.svg'
	},
	{
		name: 'French Polynesia',
		icon: 'https://localhost:4200/uploads/countries/french-polynesia.svg'
	},	
	{
		name: 'Gabon',
		icon: 'https://localhost:4200/uploads/countries/gabon.svg'
	},
	{
		name: 'Galapagos Islands',
		icon: 'https://localhost:4200/uploads/countries/galapagos-islands.svg'
	},
	{
		name: 'Gambia',
		icon: 'https://localhost:4200/uploads/countries/gambia.svg'
	},
	{
		name: 'Georgia',
		icon: 'https://localhost:4200/uploads/countries/georgia.svg'
	},
	{
		name: 'Germany',
		icon: 'https://localhost:4200/uploads/countries/germany.svg'
	},
	{
		name: 'Ghana',
		icon: 'https://localhost:4200/uploads/countries/ghana.svg'
	},
	{
		name: 'Gibraltar',
		icon: 'https://localhost:4200/uploads/countries/gibraltar.svg'
	},
	{
		name: 'Greece',
		icon: 'https://localhost:4200/uploads/countries/greece.svg'
	},
	{
		name: 'Greenland',
		icon: 'https://localhost:4200/uploads/countries/greenland.svg'
	},
	{
		name: 'Grenada',
		icon: 'https://localhost:4200/uploads/countries/grenada.svg'
	},
	{
		name: 'Guam',
		icon: 'https://localhost:4200/uploads/countries/guam.svg'
	},
	{
		name: 'Guatemala',
		icon: 'https://localhost:4200/uploads/countries/guatemala.svg'
	},
	{
		name: 'Guernsey',
		icon: 'https://localhost:4200/uploads/countries/guernsey.svg'
	},
	{
		name: 'Guinea Bissau',
		icon: 'https://localhost:4200/uploads/countries/guinea-bissau.svg'
	},
	{
		name: 'Guinea',
		icon: 'https://localhost:4200/uploads/countries/guinea.svg'
	},
	{
		name: 'Haiti',
		icon: 'https://localhost:4200/uploads/countries/haiti.svg'
	},
	{
		name: 'Hawaii',
		icon: 'https://localhost:4200/uploads/countries/hawaii.svg'
	},
	{
		name: 'Honduras',
		icon: 'https://localhost:4200/uploads/countries/honduras.svg'
	},
	{
		name: 'Hong Kong',
		icon: 'https://localhost:4200/uploads/countries/hong-kong.svg'
	},
	{
		name: 'Hungary',
		icon: 'https://localhost:4200/uploads/countries/hungary.svg'
	},
	{
		name: 'Iceland',
		icon: 'https://localhost:4200/uploads/countries/iceland.svg'
	},
	{
		name: 'India',
		icon: 'https://localhost:4200/uploads/countries/india.svg'
	},
	{
		name: 'Indonesia',
		icon: 'https://localhost:4200/uploads/countries/indonesia.svg'
	},
	{
		name: 'Iran',
		icon: 'https://localhost:4200/uploads/countries/iran.svg'
	},
	{
		name: 'Iraq',
		icon: 'https://localhost:4200/uploads/countries/iraq.svg'
	},
	{
		name: 'Ireland',
		icon: 'https://localhost:4200/uploads/countries/ireland.svg'
	},
	{
		name: 'Isle of Man',
		icon: 'https://localhost:4200/uploads/countries/isle-of-man.svg'
	},
	{
		name: 'Israel',
		icon: 'https://localhost:4200/uploads/countries/israel.svg'
	},
	{
		name: 'Italy',
		icon: 'https://localhost:4200/uploads/countries/italy.svg'
	},
	{
		name: 'Ivory Coast',
		icon: 'https://localhost:4200/uploads/countries/ivory-coast.svg'
	},
	{
		name: 'Jamaica',
		icon: 'https://localhost:4200/uploads/countries/jamaica.svg'
	},
	{
		name: 'Japan',
		icon: 'https://localhost:4200/uploads/countries/japan.svg'
	},
	{
		name: 'Jersey',
		icon: 'https://localhost:4200/uploads/countries/jersey.svg'
	},
	{
		name: 'Jordan',
		icon: 'https://localhost:4200/uploads/countries/jordan.svg'
	},
	{
		name: 'Kazakhstan',
		icon: 'https://localhost:4200/uploads/countries/kazakhstan.svg'
	},
	{
		name: 'Kenya',
		icon: 'https://localhost:4200/uploads/countries/kenya.svg'
	},
	{
		name: 'Kiribati',
		icon: 'https://localhost:4200/uploads/countries/kiribati.svg'
	},
	{
		name: 'Kosovo',
		icon: 'https://localhost:4200/uploads/countries/kosovo.svg'
	},
	{
		name: 'Kwait',
		icon: 'https://localhost:4200/uploads/countries/kwait.svg'
	},
	{
		name: 'Kyrgyzstan',
		icon: 'https://localhost:4200/uploads/countries/kyrgyzstan.svg'
	},
	{
		name: 'Laos',
		icon: 'https://localhost:4200/uploads/countries/laos.svg'
	},
	{
		name: 'Latvia',
		icon: 'https://localhost:4200/uploads/countries/latvia.svg'
	},
	{
		name: 'Lebanon',
		icon: 'https://localhost:4200/uploads/countries/lebanon.svg'
	},
	{
		name: 'Lesotho',
		icon: 'https://localhost:4200/uploads/countries/lesotho.svg'
	},
	{
		name: 'Liberia',
		icon: 'https://localhost:4200/uploads/countries/liberia.svg'
	},
	{
		name: 'Liechtenstein',
		icon: 'https://localhost:4200/uploads/countries/liechtenstein.svg'
	},
	{
		name: 'Lithuania',
		icon: 'https://localhost:4200/uploads/countries/lithuania.svg'
	},
	{
		name: 'Luxembourg',
		icon: 'https://localhost:4200/uploads/countries/luxembourg.svg'
	},
	{
		name: 'Macao',
		icon: 'https://localhost:4200/uploads/countries/macao.svg'
	},
	{
		name: 'Madagascar',
		icon: 'https://localhost:4200/uploads/countries/madagascar.svg'
	},
	{
		name: 'Madeira',
		icon: 'https://localhost:4200/uploads/countries/madeira.svg'
	},
	{
		name: 'Malasya',
		icon: 'https://localhost:4200/uploads/countries/malasya.svg'
	},
	{
		name: 'Malawi',
		icon: 'https://localhost:4200/uploads/countries/malawi.svg'
	},
	{
		name: 'Maldives',
		icon: 'https://localhost:4200/uploads/countries/maldives.svg'
	},
	{
		name: 'Mali',
		icon: 'https://localhost:4200/uploads/countries/mali.svg'
	},
	{
		name: 'Malta',
		icon: 'https://localhost:4200/uploads/countries/malta.svg'
	},
	{
		name: 'Marshall Islands',
		icon: 'https://localhost:4200/uploads/countries/marshall-islands.svg'
	},
	{
		name: 'Martinique',
		icon: 'https://localhost:4200/uploads/countries/martinique.svg'
	},
	{
		name: 'Mauritius',
		icon: 'https://localhost:4200/uploads/countries/mauritius.svg'
	},
	{
		name: 'Melilla',
		icon: 'https://localhost:4200/uploads/countries/melilla.svg'
	},
	{
		name: 'Mexico',
		icon: 'https://localhost:4200/uploads/countries/mexico.svg'
	},
	{
		name: 'Micronesia',
		icon: 'https://localhost:4200/uploads/countries/micronesia.svg'
	},
	{
		name: 'Moldova',
		icon: 'https://localhost:4200/uploads/countries/moldova.svg'
	},
	{
		name: 'Monaco',
		icon: 'https://localhost:4200/uploads/countries/monaco.svg'
	},
	{
		name: 'Mongolia',
		icon: 'https://localhost:4200/uploads/countries/mongolia.svg'
	},
	{
		name: 'Montenegro',
		icon: 'https://localhost:4200/uploads/countries/montenegro.svg'
	},
	{
		name: 'Montserrat',
		icon: 'https://localhost:4200/uploads/countries/montserrat.svg'
	},
	{
		name: 'Morocco',
		icon: 'https://localhost:4200/uploads/countries/morocco.svg'
	},
	{
		name: 'Mozambique',
		icon: 'https://localhost:4200/uploads/countries/mozambique.svg'
	},
	{
		name: 'Myanmar',
		icon: 'https://localhost:4200/uploads/countries/myanmar.svg'
	},
	{
		name: 'Namibia',
		icon: 'https://localhost:4200/uploads/countries/namibia.svg'
	},
	{
		name: 'Nato',
		icon: 'https://localhost:4200/uploads/countries/nato.svg'
	},
	{
		name: 'Nauru',
		icon: 'https://localhost:4200/uploads/countries/nauru.svg'
	},
	{
		name: 'Nepal',
		icon: 'https://localhost:4200/uploads/countries/nepal.svg'
	},
	{
		name: 'Netherlands',
		icon: 'https://localhost:4200/uploads/countries/netherlands.svg'
	},
	{
		name: 'New Zealand',
		icon: 'https://localhost:4200/uploads/countries/new-zealand.svg'
	},
	{
		name: 'Nicaragua',
		icon: 'https://localhost:4200/uploads/countries/nicaragua.svg'
	},
	{
		name: 'Niger',
		icon: 'https://localhost:4200/uploads/countries/niger.svg'
	},
	{
		name: 'Nigeria',
		icon: 'https://localhost:4200/uploads/countries/nigeria.svg'
	},
	{
		name: 'Niue',
		icon: 'https://localhost:4200/uploads/countries/niue.svg'
	},
	{
		name: 'Norfolk Island',
		icon: 'https://localhost:4200/uploads/countries/norfolk-island.svg'
	},
	{
		name: 'North Korea',
		icon: 'https://localhost:4200/uploads/countries/north-korea.svg'
	},
	{
		name: 'Northern Cyprus',
		icon: 'https://localhost:4200/uploads/countries/northern-cyprus.svg'
	},
	{
		name: 'Northern Marianas Islands',
		icon: 'https://localhost:4200/uploads/countries/northern-marianas-islands.svg'
	},
	{
		name: 'Norway',
		icon: 'https://localhost:4200/uploads/countries/norway.svg'
	},
	{
		name: 'Oman',
		icon: 'https://localhost:4200/uploads/countries/oman.svg'
	},
	{
		name: 'Ossetia',
		icon: 'https://localhost:4200/uploads/countries/ossetia.svg'
	},
	{
		name: 'Pakistan',
		icon: 'https://localhost:4200/uploads/countries/pakistan.svg'
	},
	{
		name: 'Palau',
		icon: 'https://localhost:4200/uploads/countries/palau.svg'
	},
	{
		name: 'Palestine',
		icon: 'https://localhost:4200/uploads/countries/palestine.svg'
	},
	{
		name: 'Panama',
		icon: 'https://localhost:4200/uploads/countries/panama.svg'
	},
	{
		name: 'Papua New Guinea',
		icon: 'https://localhost:4200/uploads/countries/papua-new-guinea.svg'
	},
	{
		name: 'Paraguay',
		icon: 'https://localhost:4200/uploads/countries/paraguay.svg'
	},
	{
		name: 'Peru',
		icon: 'https://localhost:4200/uploads/countries/peru.svg'
	},
	{
		name: 'Philippines',
		icon: 'https://localhost:4200/uploads/countries/philippines.svg'
	},
	{
		name: 'Pitcairn Islands',
		icon: 'https://localhost:4200/uploads/countries/pitcairn-islands.svg'
	},
	{
		name: 'Poland',
		icon: 'https://localhost:4200/uploads/countries/.svg'
	},
	{
		name: 'Portugal',
		icon: 'https://localhost:4200/uploads/countries/portugal.svg'
	},
	{
		name: 'Puerto Rico',
		icon: 'https://localhost:4200/uploads/countries/puerto-rico.svg'
	},
	{
		name: 'Qatar',
		icon: 'https://localhost:4200/uploads/countries/qatar.svg'
	},
	{
		name: 'Rapa Nui',
		icon: 'https://localhost:4200/uploads/countries/rapa-nui.svg'
	},
	{
		name: 'Republic of Macedonia',
		icon: 'https://localhost:4200/uploads/countries/republic-of-macedonia.svg'
	},
	{
		name: 'Republic of the Congo',
		icon: 'https://localhost:4200/uploads/countries/republic-of-the-congo.svg'
	},
	{
		name: 'Romania',
		icon: 'https://localhost:4200/uploads/countries/romania.svg'
	},
	{
		name: 'Russia',
		icon: 'https://localhost:4200/uploads/countries/russia.svg'
	},
	{
		name: 'Rwanda',
		icon: 'https://localhost:4200/uploads/countries/rwanda.svg'
	},
	{
		name: 'Saba Island',
		icon: 'https://localhost:4200/uploads/countries/saba-island.svg'
	},
	{
		name: 'Sahrawi Arab Democratic Republic',
		icon: 'https://localhost:4200/uploads/countries/sahrawi-arab-democratic-republic.svg'
	},
	{
		name: 'Saint Kitts and Nevis',
		icon: 'https://localhost:4200/uploads/countries/saint-kitts-and-nevis.svg'
	},
	{
		name: 'Samoa',
		icon: 'https://localhost:4200/uploads/countries/samoa.svg'
	},
	{
		name: 'San Marino',
		icon: 'https://localhost:4200/uploads/countries/san-marino.svg'
	},
	{
		name: 'Sao Tome and Prince',
		icon: 'https://localhost:4200/uploads/countries/sao-tome-and-prince.svg'
	},
	{
		name: 'Sardinia',
		icon: 'https://localhost:4200/uploads/countries/sardinia.svg'
	},
	{
		name: 'Saudi Arabia',
		icon: 'https://localhost:4200/uploads/countries/saudi-arabia.svg'
	},
	{
		name: 'Scotland',
		icon: 'https://localhost:4200/uploads/countries/scotland.svg'
	},
	{
		name: 'Senegal',
		icon: 'https://localhost:4200/uploads/countries/senegal.svg'
	},
	{
		name: 'Serbia',
		icon: 'https://localhost:4200/uploads/countries/serbia.svg'
	},
	{
		name: 'Seychelles',
		icon: 'https://localhost:4200/uploads/countries/seychelles.svg'
	},
	{
		name: 'Sicily',
		icon: 'https://localhost:4200/uploads/countries/sicily.svg'
	},
	{
		name: 'Sierra Leone',
		icon: 'https://localhost:4200/uploads/countries/sierra-leone.svg'
	},
	{
		name: 'Singapore',
		icon: 'https://localhost:4200/uploads/countries/singapore.svg'
	},
	{
		name: 'Sint Eustatius',
		icon: 'https://localhost:4200/uploads/countries/sint-eustatius.svg'
	},
	{
		name: 'Sint Maarten',
		icon: 'https://localhost:4200/uploads/countries/sint-maarten.svg'
	},
	{
		name: 'Slovakia',
		icon: 'https://localhost:4200/uploads/countries/slovakia.svg'
	},
	{
		name: 'Slovenia',
		icon: 'https://localhost:4200/uploads/countries/slovenia.svg'
	},
	{
		name: 'Solomon Islands',
		icon: 'https://localhost:4200/uploads/countries/solomon-islands.svg'
	},
	{
		name: 'Somalia',
		icon: 'https://localhost:4200/uploads/countries/somalia.svg'
	},
	{
		name: 'Somaliland',
		icon: 'https://localhost:4200/uploads/countries/somaliland.svg'
	},
	{
		name: 'South Africa',
		icon: 'https://localhost:4200/uploads/countries/south-africa.svg'
	},
	{
		name: 'South Korea',
		icon: 'https://localhost:4200/uploads/countries/south-korea.svg'
	},
	{
		name: 'South Sudan',
		icon: 'https://localhost:4200/uploads/countries/south-sudan.svg'
	},
	{
		name: 'Spain',
		icon: 'https://localhost:4200/uploads/countries/spain.svg'
	},
	{
		name: 'Sri Lanka',
		icon: 'https://localhost:4200/uploads/countries/sri-lanka.svg'
	},
	{
		name: 'St. Barts',
		icon: 'https://localhost:4200/uploads/countries/st-barts.svg'
	},
	{
		name: 'St. Lucia',
		icon: 'https://localhost:4200/uploads/countries/st-lucia.svg'
	},
	{
		name: 'St. Vincent and the Grenadines',
		icon: 'https://localhost:4200/uploads/countries/st-vincent-and-the-grenadines.svg'
	},
	{
		name: 'Sudan',
		icon: 'https://localhost:4200/uploads/countries/sudan.svg'
	},
	{
		name: 'Suriname',
		icon: 'https://localhost:4200/uploads/countries/suriname.svg'
	},
	{
		name: 'Swaziland',
		icon: 'https://localhost:4200/uploads/countries/swaziland.svg'
	},
	{
		name: 'Sweden',
		icon: 'https://localhost:4200/uploads/countries/sweden.svg'
	},
	{
		name: 'Switzerland',
		icon: 'https://localhost:4200/uploads/countries/switzerland.svg'
	},
	{
		name: 'Syria',
		icon: 'https://localhost:4200/uploads/countries/syria.svg'
	},
	{
		name: 'Taiwan',
		icon: 'https://localhost:4200/uploads/countries/taiwan.svg'
	},
	{
		name: 'Tajikistan',
		icon: 'https://localhost:4200/uploads/countries/tajikistan.svg'
	},
	{
		name: 'Tanzania',
		icon: 'https://localhost:4200/uploads/countries/tanzania.svg'
	},
	{
		name: 'Thailand',
		icon: 'https://localhost:4200/uploads/countries/thailand.svg'
	},
	{
		name: 'Tibet',
		icon: 'https://localhost:4200/uploads/countries/tibet.svg'
	},
	{
		name: 'Togo',
		icon: 'https://localhost:4200/uploads/countries/togo.svg'
	},
	{
		name: 'Tokelau',
		icon: 'https://localhost:4200/uploads/countries/tokelau.svg'
	},
	{
		name: 'Tonga',
		icon: 'https://localhost:4200/uploads/countries/tonga.svg'
	},
	{
		name: 'Transnistria',
		icon: 'https://localhost:4200/uploads/countries/transnistria.svg'
	},
	{
		name: 'Trinidad and Tobago',
		icon: 'https://localhost:4200/uploads/countries/trinidad-and-tobago.svg'
	},
	{
		name: 'Tunisia',
		icon: 'https://localhost:4200/uploads/countries/tunisia.svg'
	},
	{
		name: 'Turkey',
		icon: 'https://localhost:4200/uploads/countries/turkey.svg'
	},
	{
		name: 'Turkmenistan',
		icon: 'https://localhost:4200/uploads/countries/turkmenistan.svg'
	},
	{
		name: 'Turks and Caicos',
		icon: 'https://localhost:4200/uploads/countries/turks-and-caicos.svg'
	},
	{
		name: 'Tuvalu',
		icon: 'https://localhost:4200/uploads/countries/tuvalu.svg'
	},
	{
		name: 'Uganda',
		icon: 'https://localhost:4200/uploads/countries/uganda.svg'
	},
	{
		name: 'Ukraine',
		icon: 'https://localhost:4200/uploads/countries/ukraine.svg'
	},
	{
		name: 'United Arab Emirates',
		icon: 'https://localhost:4200/uploads/countries/united-arab-emirates.svg'
	},
	{
		name: 'United Kingdom',
		icon: 'https://localhost:4200/uploads/countries/united-kingdom.svg'
	},
	{
		name: 'United Nations',
		icon: 'https://localhost:4200/uploads/countries/united-nations.svg'
	},
	{
		name: 'United States',
		icon: 'https://localhost:4200/uploads/countries/united-states.svg'
	},
	{
		name: 'Uruguay',
		icon: 'https://localhost:4200/uploads/countries/uruguay.svg'
	},
	{
		name: 'Uzbekistan',
		icon: 'https://localhost:4200/uploads/countries/uzbekistan.svg'
	},
	{
		name: 'Vanuatu',
		icon: 'https://localhost:4200/uploads/countries/vanuatu.svg'
	},
	{
		name: 'Vatican City',
		icon: 'https://localhost:4200/uploads/countries/vatican-city.svg'
	},
	{
		name: 'Venezuela',
		icon: 'https://localhost:4200/uploads/countries/venezuela.svg'
	},
	{
		name: 'Venezuela',
		icon: 'https://localhost:4200/uploads/countries/venezuela.svg'
	},
	{
		name: 'Vietnam',
		icon: 'https://localhost:4200/uploads/countries/vietnam.svg'
	},
	{
		name: 'Virgin Islands',
		icon: 'https://localhost:4200/uploads/countries/virgin-islands.svg'
	},
	{
		name: 'Wales',
		icon: 'https://localhost:4200/uploads/countries/wales.svg'
	},
	{
		name: 'Yemen',
		icon: 'https://localhost:4200/uploads/countries/yemen.svg'
	},
	{
		name: 'Zambia',
		icon: 'https://localhost:4200/uploads/countries/zambia.svg'
	},
	{
		name: 'Zimbabwe',
		icon: 'https://localhost:4200/uploads/countries/zimbabwe.svg'
	},
]

async function main() {
	for (let i = 0; i < countries.length; i++) {
		await prisma.country.create({
			data: {
				name: countries[i].name,
				icon: countries[i].icon
			}
		})
	}
}

main()
	.catch(e => {
		Logger.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
