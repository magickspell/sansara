interface yearI {
    year: number
    text: string
}

export interface dataI {
    data: yearI[]
}

export interface mockData {
    data: {
        name: string,
        body: dataI
    }[]
}

/* 1 technologies 80-86 */
const technologies: dataI = {
    data: [
        {
            year: 1980,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 1981,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 1982,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 1983,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 1984,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 1985,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 1986,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
    ]
}

/* 2  cinema 87 - 91 */
const cinema: dataI = {
    data: [
        {
            year: 1987,
            text: '"Хищник"/Predator, США (реж. Джон Мактинан)'
        },
        {
            year: 1988,
            text: 'Кто подставил Роджера'
        },
        {
            year: 1989,
            text: 'Назад в будущее 2 / Back to the future 2'
        },
        {
            year: 1990,
            text: 'Крепкий орешек'
        },
        {
            year: 1991,
            text: 'Крепкий орешек 2'
        },
    ]
}

/* 3 literature 92 - 97 */
const literature: dataI = {
    data: [
        {
            year: 1992,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 1993,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 1994,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 1995,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 1996,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 1997,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        }
    ]
}

/* 4 1998 - 2005 */
const something: dataI = {
    data: [
        {
            year: 1998,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 1999,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 2000,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 2001,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 2002,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 2003,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 2004,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 2005,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        }
    ]
}

/* 5 sport 2006 - 2014 */
const sport: dataI = {
    data: [
        {
            year: 2006,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 2007,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 2008,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 2009,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 2010,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 2011,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 2012,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        },
        {
            year: 2013,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        }
        ,
        {
            year: 2014,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.'
        }
    ]
}

/* 6 science */
const science: dataI = {
    data: [
        {
            year: 2015,
            text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
        },
        {
            year: 2016,
            text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
        },
        {
            year: 2017,
            text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
        {
            year: 2018,
            text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
        {
            year: 2019,
            text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
        {
            year: 2020,
            text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        }
    ]
}

/* collect all data and return */
export const db: mockData = {
    data: [
        {
            name: 'Технологии',
            body: technologies
        },
        {
            name: 'Кино',
            body: cinema
        },
        {
            name: 'Литература',
            body: literature
        },
        {
            name: '',
            body: something
        },
        {
            name: 'Спорт',
            body: sport
        },
        {
            name: 'Наука',
            body: science
        },
    ]
}