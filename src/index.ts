import yargs from 'yargs'
import dotenv from "dotenv";
import * as fetch from './fetch';
import * as auth from './auth';

dotenv.config();

const options = yargs
    .usage('Usage: --op <operation_name>')
    .option('op', { alias: 'operation', describe: 'operation name', type: 'string', demandOption: true })
    .argv;


async function main() {

    console.log(`You have selected: ${options.op}`);

    switch (yargs.argv['op']) {
        case 'getUsers':

            try {
                const authResponse = await auth.getToken(auth.tokenRequest);
                const users = await fetch.callApi(auth.apiConfig.uri, authResponse!.accessToken);
                console.log(users);
            } catch (error) {
                console.log(error);
            }

            break;
        default:
            console.log('Select a Graph operation first');
            break;
    }
};