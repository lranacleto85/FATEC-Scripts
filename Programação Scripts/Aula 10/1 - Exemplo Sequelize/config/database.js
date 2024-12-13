import { Sequelize } from 'sequelize';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const config = JSON.parse(readFileSync(resolve('config/config.json'), 'utf-8'))['development'];
const sequelize = new Sequelize(config);

export default sequelize;
