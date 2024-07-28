import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import useInfoStore from '@/store/useInfoStore';
import './index.less'

export default function Index() {
  const bears = useInfoStore((state: any) => state.bears)
  useLoad(() => {
    console.log('Page loaded.')
  })
  const clickText = () => {
    console.log('clickText')
    // 跳转到目的页面，打开新页面
    Taro.navigateTo({
      url: '/pages/speak/index',
    })
  }
  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Text>{bears}</Text>
      <AtButton type='primary' onClick={clickText}>跳转</AtButton>

    </View>
  )
}
