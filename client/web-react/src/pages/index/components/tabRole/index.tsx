import { View } from '@tarojs/components'
import { AtButton, AtInput, AtForm } from 'taro-ui'
import Taro from '@tarojs/taro'
import { useRequest } from 'ahooks';
import { getRoleList } from '@/request/role.js'

import { useEffect, useLayoutEffect, useState } from 'react'
import './index.less'


export default function Index() {
  const [roleList, setRoleList] = useState([])
  const { run: runList, loading } = useRequest(getRoleList,
    {
        manual: true,
        onSuccess: (res) => {
          console.log('res',res)
          setRoleList(res.data || [])
        },
        onError: (err) => {
          setRoleList([])
        }
    }
  );

  useEffect(() => {
    runList()
  }, [])

  // const [roleList, setRoleList] = useState([])

  return (
    <View className='roleContent'>
      {roleList.map((item, index) => {
        return (
          <View key={index} className='aiContentItem'>
            <View className='aiContentItemLeft'>
              {item.name}
            </View>
            <View className='aiContentItemRight'>
              {item.hello_msg}
            </View>
          </View>
        )
      })}

    </View>
  )
}
