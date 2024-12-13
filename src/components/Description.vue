<template>
    <div class="description-tabs">
      <ul class="tabs">
        <li v-for="tab in tabs" :key="tab" :class="{ active: activeTab === tab }" @click="activeTab = tab">
          {{ tab }}
        </li>
      </ul>
      <div class="tab-content">
        <p v-if="activeTab === 'Description'">
            Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
            Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because. 
        </p>
        <p v-if="activeTab === 'Additional Info'">Additional info</p>
        <p v-if="activeTab === 'Reviews'">reviews</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tabs: ["Description", "Additional Info", "Reviews"],
        activeTab: "Description",
      };
    },
  };
  </script>
  
  <style scoped>
  .description-tabs {
    margin-top: 20px;
    background: #fff;
    /* border: 1px solid #ddd; */
    border-radius: 8px;
    padding: 20px;
  }
  
  .tabs {
    display: flex;
    list-style: none;
    padding: 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  .tabs li {
    margin-right: 20px;
    cursor: pointer;
    font-weight: bold;
  }
  
  .tabs .active {
    color: #007bff;
    border-bottom: 2px solid #007bff;
  }
  
  .tab-content {
    font-size: 14px;
    color: #666;
  }
  </style>
  