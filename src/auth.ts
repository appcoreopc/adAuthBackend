import * as msal from "@azure/msal-node";

/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL Node configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/configuration.md 
 */
export const msalConfig = {
	
    auth: {
        clientId: "",
        authority: "https://login.microsoftonline.com/" + "tenant_id",
        clientSecret: ""
    }
};

/**
 * With client credentials flows permissions need to be granted in the portal by a tenant administrator.
 * The scope is always in the format '<resource>/.default'. For more, visit: 
 * https://docs.microsoft.com/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow 
 */

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/';

export const tokenRequest = {
	scopes: ['https://graph.microsoft.com/.default'],
};

export const apiConfig = {
	uri: GRAPH_ENDPOINT + 'v1.0/users',
};

/**
 * Initialize a confidential client application. For more info, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/initialize-confidential-client-application.md
 */
export const cca = new msal.ConfidentialClientApplication(msalConfig);

/**
 * Acquires token with client credentials.
 * @param {object} tokenRequest 
 */
export async function getToken(tokenRequest:msal.ClientCredentialRequest) {
	return await cca.acquireTokenByClientCredential(tokenRequest);
}
