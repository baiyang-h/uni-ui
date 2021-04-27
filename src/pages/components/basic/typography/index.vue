<template>
  <view class="typography-page wrap-page">
    <u-panel title="字体">
      <view class="font">
        <image src="/static/images/typography/fontPingFangSC.png" />
        <image src="/static/images/typography/fontHiraginoSansGB.png" />
        <image src="/static/images/typography/fontMicrosoftYaHei.png" />
        <image src="/static/images/typography/fontSanFranciscoUi.png" />
        <image src="/static/images/typography/fontHelveticaNeue.png" />
        <image src="/static/images/typography/fontArial.png" />
      </view>
    </u-panel>

    <u-gap />

    <u-panel title="字号">
      <view class="table">
        <u-table>
          <u-tr class="u-tr">
            <u-th class="u-th">层级</u-th>
            <u-th class="u-th">字体大小</u-th>
            <u-th class="u-th">举例</u-th>
          </u-tr>
          <u-tr class="u-tr u-font-12">
            <u-td class="u-td ">辅助文字</u-td>
            <u-td class="u-td">
              <view class="u-td-font"><text>12px</text><text>xs</text></view>
            </u-td>
            <u-td class="u-td">快速搭建页面</u-td>
          </u-tr>
          <u-tr class="u-tr u-font-13">
            <u-td class="u-td">正文（小）</u-td>
            <u-td class="u-td">
              <view class="u-td-font"><text>13px</text><text>sm</text></view>
            </u-td>
            <u-td class="u-td">快速搭建页面</u-td>
          </u-tr>
          <u-tr class="u-tr u-font-14">
            <u-td class="u-td">正文</u-td>
            <u-td class="u-td">
              <view class="u-td-font"><text>14px</text><text>bs</text></view>
            </u-td>
            <u-td class="u-td">快速搭建页面</u-td>
          </u-tr>
          <u-tr class="u-tr u-font-15">
            <u-td class="u-td">小标题</u-td>
            <u-td class="u-td">
              <view class="u-td-font"><text>16px</text><text>md</text></view>
            </u-td>
            <u-td class="u-td">快速搭建页面</u-td>
          </u-tr>
          <u-tr class="u-tr u-font-16">
            <u-td class="u-td">标题</u-td>
            <u-td class="u-td">
              <view class="u-td-font"><text>18px</text><text>lg</text></view>
            </u-td>
            <u-td class="u-td">快速搭建页面</u-td>
          </u-tr>
          <u-tr class="u-tr u-font-17">
            <u-td class="u-td">主标题</u-td>
            <u-td class="u-td">
              <view class="u-td-font"><text>20px</text><text>xl</text></view>
            </u-td>
            <u-td class="u-td">快速搭建页面</u-td>
          </u-tr>
        </u-table>
      </view>
    </u-panel>

    <u-gap />

    <u-panel title="行高">
      <view class="line-height-container u-flex">
        <image src="/static/images/typography/line-height.png" class="line-height-img" />
        <view class="line-height-text u-font-xs">
          <view>
            <text>line-height:1</text>
            <text>无行高</text>
          </view>
          <view>
            <text>line-height:1.3</text>
            <text>紧凑</text>
          </view>
          <view>
            <text>line-height:1.5</text>
            <text>常规</text>
          </view>
          <view>
            <text>line-height:1.7</text>
            <text>宽松</text>
          </view>
        </view>
      </view>
    </u-panel>

    <u-gap />
  </view>
</template>

<script>


export default {
  name: "TypographyPage"
}
</script>

<style scoped lang="scss">
.typography-page {

  .font {
    display: flex;
    flex-wrap: wrap;
    image {
      width: 50%;
      height: 40vw;
      padding: 20rpx;
      box-sizing: border-box;
    }
  }

  .table {
    .u-td-font {
      display: flex;
      text {
        width: 50%;
      }
    }
    @for $i from 12 through 18 {
      .u-font-#{$i} {
        .u-td {
          font-size: $i + px !important;
        }
      }
    }
  }

  .line-height-container {
    .line-height-img {
      width: 400rpx;
      height: 160rpx;
    }
    .line-height-text {
      line-height: 1.5;
      margin-left: 30rpx;
    }
  }
}
</style>