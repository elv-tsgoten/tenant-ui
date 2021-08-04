const { MakeKMSCall, getClient } = require("./ClientUtils");

async function getTenantInfo(tenantId) {
  return await MakeKMSCall({
    methodName: "elv_getTenantInfo", 
    paramTypes: ["string", "string"], 
    params: [(await getClient()).contentSpaceId, tenantId],  
  });
}

module.exports = { getTenantInfo }
