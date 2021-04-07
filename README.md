# adAuthScope

This is a demo for a backend daemon process that has no ui or user intervention. 
So basicaly everything is happening behind the scene. 

This includes 

1. Logging in as the user to get a token.
using msal.js to get a token using acquireTokenByClientCredential()

2. Then use the token to call Microsoft Graph REST API. 
we are using axios to make a simple get request. 

*** Almost copy and paste - except when you add Permision for graph, instead of choosing delegating app, choose Application 

Sign in to the Azure portal.

If you have access to multiple tenants, use the Directory + subscription filter  in the top menu to select the tenant in which you want to register an application.

Search for and select Azure Active Directory.

Under Manage, select App registrations > New registration.

Enter a Name for your application, for example msal-node-cli. Users of your app might see this name, and you can change it later.

Select Register.

Under Manage, select Certificates & secrets.

Under Client secrets, select New client secret, enter a name, and then select Add. Record the secret value in a safe location for use in a later step.

Under Manage, select API Permissions > Add a permission. Select Microsoft Graph.

Select Application permissions. <---- VERY IMPORTANT - don't get this wrong

Under User node, select User.Read.All, then select Add permissions.