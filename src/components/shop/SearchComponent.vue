<template>
  <div class="search">
      <span class="back" @click="handleBack">
        <left theme="outline" size="20" fill="#333"/>
      </span>
    <div class="search_item">
        <span>
          <search theme="outline" size="20" fill="#333"/>
        </span>
      <input placeholder="请输入商品名称搜索">
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { Search, Left } from '@icon-park/vue-next'

export default {
  name: 'SearchComponent',
  components: {
    Search,
    Left
  },
  setup () {
    const router = useRouter()
    const handleBack = () => {
      router.back()
    }
    return { handleBack }
  }
}
</script>

<style scoped>
.search {
  padding: 0 18px;
  height: 32px;
  margin: 16px 0;
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.search .back {
  margin-right: 8px;
}

.search_item {
  position: relative;
  height: 100%;
  width: 100%;
}

.search_item span {
  position: absolute;
  top: 4px;
  left: 5px;
}

.search_item input {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-radius: 16px;
  background: #F5F5F5;
  border: none;
  padding-left: 40px;
}
</style>
