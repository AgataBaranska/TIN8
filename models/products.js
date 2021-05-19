const products = [];
module.exports = class Produkt {
    constructor(id, model) {
        this.id = id;
        this.model = model;

    }

    save() {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data', 'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll() {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data', 'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }

            return products;
        });
    }
}