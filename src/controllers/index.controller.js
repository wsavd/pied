import Item from '../models/item.model';

function index(req, res) {
    res.json('Hello from API on ES6');
}

function load(req, res) {
    Item.find()
            .then(results=>res.json(results));
}

function create()

export default {index, load}