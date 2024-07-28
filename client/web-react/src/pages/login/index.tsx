import { View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { AtButton, AtInput, AtForm } from 'taro-ui'
import { useState } from 'react'
import './index.less'
import { useRequest } from 'ahooks';
import { login } from '@/request/login.js'
import Taro from '@tarojs/taro'
import { setUserToken } from '@/store/session.js'

export default function Index() {
  const [username, setUsername] = useState('18575670125')
  const [password, setPassword] = useState('12345678')

  useLoad(() => {
    console.log('Page loaded.')
  })

  const { run: runLogin, loading } = useRequest(login,
    {
        manual: true,
        onSuccess: (res) => {
          // todo 存储用户登录成功的token
          setUserToken(res.data)
          Taro.showToast({
            title: '登录成功',
            icon: 'success'
          })
          Taro.reLaunch({
            url: '/pages/index/index',
          })
        },
        onError: (err) => {
          Taro.showToast({
            title: err.message,
            icon: 'error'
          })
        }
    }
);

  const clickLogin = () => {
    console.log('clickText', username, password)
    // 跳转到目的页面，打开新页面
    runLogin({username: username, password: password})

  }
  return (
    <View className='login'>
      <AtForm>
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
        <AtInput
          name='password'
          title='密码'
          type='password'
          placeholder='请输入密码'
          value={password}
          onChange={(val: string) => {
            setPassword(val)
          }}
        />
      </AtForm>
      <View className='btn'>
        <AtButton type='primary' onClick={clickLogin} loading={loading}>登录</AtButton>
      </View>
    </View>
  )
}
