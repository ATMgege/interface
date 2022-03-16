import { ChainId } from 'teddyswap-sdk'
import MULTICALL_ABI from './abi.json'

//TODO: ORANGE MultiCall
const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.BSCTestnet]: '0x9659Db3C4C43073A73a0E5Fbb8ba4149924c89d6',
  [ChainId.BSC]: '0xf9806eD9D536bf5837cC52535d9A51c5028dD890',
  [ChainId.ETH]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
