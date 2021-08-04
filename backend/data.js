import bcrypt from 'bcryptjs';

const data = {
    users: [
      
        {
            name: 'Catalina',
            email: 'catalina@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,

        }

    ],
    products: [
        {
            
            name: 'Overol piloto con reflectantes',
            category: 'security clothes',
            image: '../images/p2.jpg',
            price: 8990,
            countInStock: 5,
            brand: 'generico',
            rating: 4.5,
            numReviews: 5,
            description: 'Excelente calidad'

        },
        {
            
            name: 'Overol piloto sin reflectantes',
            category: 'security clothes',
            image: '../images/p2.jpg',
            price: 9990,
            countInStock: 20,
            brand: 'generico',
            rating: 4.5,
            numReviews: 20,
            description: 'Excelente calidad'

        },

        {
            
            name: 'Overol piloto',
            category: 'security clothes',
            image: '../images/p3.jpg',
            price: 7990,
            countInStock: 40,
            brand: 'generico',
            rating: 4.5,
            numReviews: 15,
            description: 'Buena calidad'

        },

        {
            
            name: 'Overol de alta resistencia',
            category: 'security clothes',
            image: '../images/p4.jpg',
            price: 5990,
            countInStock: 0,
            brand: 'generico',
            rating: 4.5,
            numReviews: 10,
            description: 'Excelente calidad'

        },

        {
            
            name: 'Overol verde',
            category: 'security clothes',
            image: '../images/p4.jpg',
            price: 6990,
            countInStock: 9,
            brand: 'generico',
            rating: 4.5,
            numReviews: 10,
            description: 'Excelente calidad'

        },

        {
           
            name: 'Overol para construccion',
            category: 'security clothes',
            image: '../images/p4.jpg',
            price: 2990,
            countInStock: 18,
            brand: 'generico',
            rating: 4.5,
            numReviews: 10,
            description: 'Excelente calidad'

        },
        {
           
            name: 'Overol de cocina',
            category: 'security clothes',
            image: '../images/p4.jpg',
            price: 10990,
            countInStock: 25,
            brand: 'generico',
            rating: 3.5,
            numReviews: 56,
            description: 'Excelente '

        },



    ],


};
export default data;