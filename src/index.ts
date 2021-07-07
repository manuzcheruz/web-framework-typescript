import { User } from "../models/User";

const user = new User({name: 'manuz', age: 25});
user.set({name: 'chief'});
console.log(user.get('name'));
console.log(user.get('age'));