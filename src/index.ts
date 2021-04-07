import * as yargs from 'yargs';
import dotenv from "dotenv";
import { callApi } from './fetch';
import { getToken, apiConfig, tokenRequest } from './auth';

dotenv.config();

const options = yargs
    .usage('Usage: --op <operation_name>')
    .option('op', { alias: 'operation', describe: 'operation name', type: 'string', demandOption: true })
    .argv;

async function main() {

    switch (yargs.argv['op']) {
        case 'getUsers':

            try {
                console.log("Getting token:" + tokenRequest);
                // getting a token for us and we need to login if we haven't done so.
                const authResponse = await getToken(tokenRequest);
                //console.log(authResponse);
                // initiating a simple call to the microsoft graph with the token obtained above.
                console.log("calling the graph api. Please read README.md to setup your app permission.")
                const graphApiCallResponse = await callApi(apiConfig.uri, authResponse!.accessToken);
                //console.log(graphApiCallResponse);
            } catch (error) {
                console.log(error);
            }

            break;
        default:
            console.log('Select a Graph operation first');
            break;
    }
};


main();