const ElvClient = require("@eluvio/elv-client-js");
const ethers = require("ethers");
const TestConfig = require("../TestConfiguration.json");

const client;

async function getClient() {
  if (client == null) {
    const client = await ElvClient.ElvClient.FromConfigurationUrl({ configUrl: TestConfig["config-url"] });
    const wallet = client.GenerateWallet();
    const signer = wallet.AddAccount({ privateKey: "0xf1acf70dd745f9c907dd855ac515ba8b0ba9f4ebfe10f5af3c472a6a0eead885" });
    client.SetSigner({ signer });
  }
  return client;
}

/** Custom make KMS Call. */
async function MakeKMSCall({methodName, params, paramTypes, signature=true}) {

  const KMSUrls = [TestConfig["kms-url"]];

  for(let i = 0; i < KMSUrls.length; i++) {
    try {
      console.log(
        `Making KMS request:
        URL: ${KMSUrls[i]}
        Method: ${methodName}
        Params: ${params.join(", ")}`
      );

      const stateChannelProvider = new ethers.providers.JsonRpcProvider(KMSUrls[i]);
      // console.log(stateChannelProvider)
      return await stateChannelProvider.send(methodName, params);
    } catch(error) {
      console.log(`KMS Call Error: ${error}`, true);

      // If the request has been attempted on all KMS urls, throw the error
      if(i === KMSUrls.length - 1) {
        throw error;
      }
    }
  }
};

module.exports = { getClient, MakeKMSCall }
