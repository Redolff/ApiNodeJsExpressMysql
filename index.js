const express = require('express');
const app = express();

const cors = require('cors');
const conexion = require('./kc');

app.use(express.json());

conexion.connect(function(error){
    if(error){
        throw error;
    }
    else{
        console.log('Conexion exitosa');
    }
})

conexion.query('SELECT * FROM productos', function(error, results, request){
    if(error){
        throw error;
    }
    else{
        results.forEach(result => {
            app.get('/api/productos', (request, response) => {
                response.json(result);
            })
        })  
    }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

conexion.end();



/*
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
})); 

let productos = [
    {
        "id": 1,
        "name": 'Ferrari',
        "price": 2000,
        "img": 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ferrari_F8_Tributo_Genf_2019_1Y7A5665.jpg/247px-Ferrari_F8_Tributo_Genf_2019_1Y7A5665.jpg'
    },
    {
        "id": 2,
        "name": 'Lamborgini',
        "price": 3000,
        "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6RawAwlYuVa2a1b6ClyPU5SzbLHkvS91D51O2N9XLAyq7-KVsDl66_l7lI-S92E5ezEA&usqp=CAU'
    },
    {
        "id": 3,
        "name": 'Corsa',
        "price": 300,
        "img": 'https://acroadtrip.blob.core.windows.net/publicaciones-imagenes/Large/chevrolet/corsa/ar/RT_PU_16de5cc48b514fe98472ec0c29aafcc4.jpg'
    },
    {
        "id": 4,
        "name": 'Peugeot 208',
        "price": 54355999,
        "img": 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_6b742773475345ddadabe1fad775bb0c.jpg'
    }
];


conexion.query('SELECT * FROM categorias', function(error, results, request){
    if(error){
        throw error;
    }
    results.forEach(result => {
        console.log(result);
    });
})

/*
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    conexion.connect(function(error){
        if(error){
            throw error;
        }else{
            console.log('DataBase conectada');
        }
    })
})
const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-type' : 'application/json' })
    response.end(JSON.stringify(productos));
}) 
*/
/*
app.get('/', (request, response) => {
    response.send('<h1>Hello word!</h1>')
})

app.get('/api/productos', (request, response) => {
    response.json(productos);
})

app.get('/api/productos/:id', (request, response) => {
    const id = Number(request.params.id)
    const producto = productos.find(producto => producto.id === id);

    if(producto){
        response.json(producto);
    }else{
        response.status(404).end();
    }
})

app.delete('/api/productos/:id', (request, response) => {
    const id = Number(request.params.id)
    productos = productos.filter(producto => producto.id != id)
    response.status(204).end();
})

app.post('/api/productos', (request, response) => {
    const producto = request.body

    if(!producto || !producto.name) {
        return response.status(400).json({
            error: 'producto.name is missing'
        });
    }

    const ids = productos.map(producto => producto.id);
    const maxId = Math.max(...ids);

    const newProduct = {
        id: maxId + 1,
        name: producto.name,
        price: producto.price,
        img: producto.img
    }

    productos = [...productos, newProduct];

    response.status(200).json(newProduct)
});
*/
