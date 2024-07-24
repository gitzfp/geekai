import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import useInfoStore from '@/store/useInfoStore';
import { AtButton } from 'taro-ui'

import './index.less'

export default function Index() {
  const bears = useInfoStore((state: any) => state.bears)
  const increasePopulation = useInfoStore((state: any) => state.increasePopulation)

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>说话!</Text>
      <Text>{bears}</Text>
      <AtButton type='primary' onClick={increasePopulation}>+</AtButton>
    </View>
  )
}
