import { verifyContract } from "../../helpers/helperUtils";
import { contractsInfo } from "../../helpers/constants";

async function main() {
  const StateLibAddress: string = "<put-your-contract-address>";
  const StateAddress: string = "<put-your-contract-address>";

  if (StateAddress.includes("0x")) {
    await verifyContract(StateAddress, contractsInfo.STATE.verificationOpts);
  }

  if (StateLibAddress.includes("0x")) {
    await verifyContract(StateLibAddress, contractsInfo.STATE_LIB.verificationOpts);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
