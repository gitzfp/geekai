import { View } from '@tarojs/components'
import { AtButton, AtInput, AtForm } from 'taro-ui'

import { useState } from 'react'
import './index.less'


export default function Index() {
  const [username, setUsername] = useState('18575670125')

  return (
    <View className='aiContent'>
      tabAi

      <AtInput
          name='username'
          border={false}
          title='手机号码'
          type='phone'
          placeholder='请输入手机号码'
          value={username}
          onChange={(val: string) => {
            setUsername(val)
          }}
        />
    </View>
  )
}
