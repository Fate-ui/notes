<template>
  <div class="mx-4 px-4 py-8 bg-neutral-50 rounded-2xl">
    <h2 class="text-3xl font-bold mb-6">必备电脑软件</h2>
    <div class="leading-[3em] bg-green-accent-1 px-4 text-xl rounded-lg">
      💡 此页面的提取密码会自动复制，无需手动复制
    </div>
    <ol>
      <li v-for="(item, index) in data" class="mt-4">
        <div class="text-xl">{{ ++index }}. {{ item.title }}</div>
        <span v-for="info in item.items" class="leading-10">
          <a
            @click="handleLink(info.href, info.password)"
            :title="info.password && '跳转链接，密码将自动复制'"
            class="mr-4 text-blue cursor-pointer"
            >{{ info.name }}</a
          >
          <span v-if="info.password" class="mr-6">密码：{{ info.password }}</span>
          <div v-if="info.describe" v-html="info.describe"></div>
        </span>
      </li>
    </ol>
  </div>
</template>

<script lang="ts" setup>
async function handleLink(url: string, password: string) {
  password && (await navigator.clipboard.writeText(password))
  window.open(url)
}
const data = [
  {
    title: '通讯类',
    items: [
      {
        name: 'QQ绿色版',
        href: 'https://wwr.lanzoui.com/iYdoCr1ntyj',
        password: 'acns'
      },
      {
        name: '微信',
        href: 'https://dldir1.qq.com/weixin/Windows/WeChatSetup.exe'
      }
    ]
  },
  {
    title: '浏览器',
    items: [
      {
        name: '谷歌浏览器',
        href: 'http://www.dayanzai.me/chrome.html'
      }
    ]
  },
  {
    title: '截图软件',
    items: [
      {
        name: 'snipaste',
        href: 'https://zh.snipaste.com/index.html',
        describe: `<span class="text-xl">😀用过最好用的截图软件！支持把截图贴到屏幕上，方便对照着查看。推荐！</span>`
      }
    ]
  },
  {
    title: '卸载工具',
    items: [
      {
        name: 'Geek',
        href: 'https://geekuninstaller.com/'
      },
      {
        name: 'IObit Uninstall破解版',
        href: 'https://wwr.lanzoui.com/iZ0iDr1m9xc',
        password: '3d4t',
        describe: `<span class="text-lg">干净无残留的卸载软件，软件很轻量级，特别是Geek</span>`
      }
    ]
  },
  {
    title: '代码工具',
    items: [
      {
        name: 'VsCode',
        href: 'https://code.visualstudio.com/'
      },
      {
        name: 'Webstorm',
        href: 'https://www.jetbrains.com/webstorm/promo/?source=google&medium=cpc&campaign=9641686236&term=webstorm&gclid=Cj0KCQjwma6TBhDIARIsAOKuANyFldesDRmhhzmW6_mmIFAAWkEXHQQDJgcfNwZ-lw7sh0lpA_owSkIaAtrIEALw_wcB',
        describe: `Webstorm插件：Chinese(Simplyfied)（webstorm汉化）、json2ts、Translation(翻译)、inlineError（实时提示错误）、Github
            Copilot（AI代码提示）`
      }
    ]
  },
  {
    title: '强大的工具',
    items: [
      {
        name: 'uTools',
        href: 'https://u.tools/'
      }
    ]
  },
  {
    title: '下载工具',
    items: [
      {
        name: 'IDM',
        href: 'https://pan.lanzoui.com/iKSb1ov9yud'
      }
    ]
  },
  {
    title: '安全工具',
    items: [
      {
        name: '火绒',
        href: 'https://www.huorong.cn/person5.html'
      }
    ]
  },
  {
    title: '解压工具',
    items: [
      {
        name: '7ZIP',
        href: 'https://wwr.lanzoui.com/iL7yer0tzbc',
        password: '5d46'
      }
    ]
  },
  {
    title: '显示网速的小工具',
    items: [
      {
        name: 'TrafficMonitor',
        href: 'https://wwr.lanzoui.com/iqwYTr0to5a',
        password: 'bc1r'
      }
    ]
  },
  {
    title: '视频播放器',
    items: [
      {
        name: 'TrafficMonitor',
        href: 'https://wwr.lanzoui.com/iY5Qdr3b3ih',
        password: 'cggu'
      },
      {
        name: '皮肤',
        href: 'https://wwr.lanzoui.com/iF7YVr3b3qf'
      }
    ]
  },
  {
    title: 'Microsoft Store',
    items: [
      {
        name: 'Microsoft Store',
        href: 'https://wwr.lanzoui.com/iva5Zr3a3oh',
        password: '1qf1'
      }
    ]
  },
  {
    title: '文件搜索工具',
    items: [
      {
        name: 'Everything',
        href: 'https://wwr.lanzoui.com/ib1IYr3bedi',
        password: '1qf1'
      }
    ]
  },
  {
    title: '激活Widows、Office等',
    items: [
      {
        name: 'KMS',
        href: 'https://wwr.lanzoui.com/ifSEQr42vrg'
      }
    ]
  },
  {
    title: '光驱',
    items: [
      {
        name: '软媒虚拟光驱',
        href: 'https://wwr.lanzoui.com/iehHBr4303c'
      }
    ]
  },
  {
    title: '翻墙工具',
    items: [
      {
        name: 'Clash for Windows',
        href: 'https://wwt.lanzouj.com/irVOq00ee0uj',
        password: '68y7'
      }
    ]
  },
  {
    title: '驱动',
    items: [
      {
        name: '联想驱动',
        href: 'https://wwr.lanzoui.com/iFbMJr4lzeb',
        password: '1jqy'
      },
      {
        name: 'AMD官方驱动',
        href: 'https://wwr.lanzoui.com/iBFmNr5pu1i',
        password: 'fsf5'
      }
    ]
  },
  {
    title: 'PDF阅读器',
    items: [
      {
        name: 'SumatraPDF',
        href: 'https://wwr.lanzoui.com/i5Ajxrbktda'
      }
    ]
  },
  {
    title: '微软常用运行库',
    items: [
      {
        name: '微软常用运行库',
        href: 'https://wwt.lanzouj.com/iRJxg00m25za',
        password: 'athh'
      }
    ]
  }
]
</script>

<style lang="scss" scoped></style>
