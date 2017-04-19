<template>
  <div class="">
    <el-form label-position="top" label-width="100px">
      <el-form-item label="Owner">
        <el-input v-model="house.owner"></el-input>
      </el-form-item>
      <el-form-item label="Address">
        <el-input v-model="house.address"></el-input>
      </el-form-item>
      <el-form-item label="Contact">
        <el-input v-model="house.contact"></el-input>
      </el-form-item>
      <el-form-item label="Image">
        <el-input v-model="house.image"></el-input>
      </el-form-item>
      <el-form-item label="Description">
        <el-input type="textarea" v-model="house.description"></el-input>
      </el-form-item>
      <el-form-item label="Price">
        <el-input v-model="house.price"></el-input>
      </el-form-item>
      <el-form-item label="Map Location">
        <el-input v-model="house.mapLocation"></el-input>
      </el-form-item>
      <el-button type="primary" @click="add(house)">Submit</el-button>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      house: {
        owner       : '',
        address     : '',
        contact     : '',
        image       : '',
        description : '',
        price       : 0,
        mapLocation : ''
      }
    }
  },
  methods: mapActions([
    'add'
  ])
}
</script>
