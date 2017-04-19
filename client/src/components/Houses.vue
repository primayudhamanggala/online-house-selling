<template>
  <div class="">
    <el-row v-for="(house, index) in $store.state.houses" key="index">
      <el-col :span="10">
        <el-card :body-style="{ padding: '0px' }">
          <button class="close" @click="remove(house._id)"><span>&times;</span></button>
          <img :src="house.image" class="image">
          <div style="padding: 14px;">
            <el-row>
              <span>Owner : {{house.owner}}</span>
            </el-row>
            <el-row>
              <span>Address : {{house.address}}</span>
            </el-row>
            <el-row>
              <span>Contact : {{house.contact}}</span>
            </el-row>
            <el-row>
              <span>Description : {{house.description}}</span>
            </el-row>
              <span>Price : Rp. {{house.price}}</span>
            <el-row>
              <span >lat :{{house.lat}}</span>
            </el-row>
            <el-row>
              <span >lng :{{house.lng}}</span>
            </el-row>
            <el-row>
              <gmap-map
              :center="{lat:house.lat, lng:house.lng}"
              :zoom="7"
              style="width: 500px; height: 300px"
              >
              <gmap-marker
                :position="{lat:house.lat, lng:house.lng}"
                :clickable="true"
                :draggable="true"
              ></gmap-marker>
              </gmap-map>
            </el-row>
          </div>
          <button type="text" @click="showModal(house)">Update</button>
        </el-card><br>
      </el-col>
    </el-row>
    <el-dialog title="House" v-model="updateFormVisible">
      <el-form>
        <el-form-item label="Owner">
          <el-input v-model="house.owner" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Address">
          <el-input v-model="house.address" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Contact">
          <el-input v-model="house.contact" auto-complete="off"></el-input>
        </el-form-item>
        </el-form-item>
        <el-form-item label="Image">
          <el-input v-model="house.image" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Description">
          <el-input v-model="house.description" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Price">
          <el-input v-model="house.price" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Latitude">
          <el-input v-model="house.lat" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Longitude">
          <el-input v-model="house.lng" auto-complete="off"></el-input>
        </el-form-item>
        <el-button @click="updateFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="updateFormVisible = false; update(house)">Confirm</el-button>
      </el-form>
    </el-dialog>
  </div>

</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      src: '',
      center : {},
      markers: {
        position: ''
      },
      updateFormVisible: false,
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
  methods: Object.assign({
    showModal: function(data) {
      this.updateFormVisible = true,
      this.house = data
    },
    test: function() {
      alert('first step')
      console.log(this.center);
    },
    ...mapActions([
      'getAll',
      'remove',
      'update'
    ])
  }),
  created() {
    this.$store.dispatch('getAll')
  }
}
</script>

<style>
  .image {
   width: 50%;
   display: block;
  }
</style>
