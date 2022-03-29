import { ChainId } from 'teddyswap-sdk'
import MULTICALL_ABI from './abi.json'

//TODO: ORANGE MultiCall
const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.BSCTestnet]: '0x9659Db3C4C43073A73a0E5Fbb8ba4149924c89d6',
  [ChainId.BSC]: '0xf9806eD9D536bf5837cC52535d9A51c5028dD890',
  [ChainId.KCC]: '0x0487550B8B8B20F8B5306260f8De1C509aA09EfF'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
