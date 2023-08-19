<template>
  <winui-menu class="can-hover">
    <winui-menuitem><button>Option 1</button></winui-menuitem>
    <winui-menuitem><button>Option 2</button></winui-menuitem>
    <winui-menuitem>
      Option 3
      <winui-menu>
        <winui-menuitem><button>Option 3.1</button></winui-menuitem>
        <winui-menuitem><button>Option 3.2</button></winui-menuitem>
        <winui-menuitem><button>Option 3.3</button></winui-menuitem>
        <winui-menuitem><button>Option 3.4</button></winui-menuitem>
      </winui-menu>
    </winui-menuitem>
    <hr />
    <winui-menuitem><button>Option 4</button></winui-menuitem>
    <winui-menuitem><button>Option 5</button></winui-menuitem>
    <hr />
    <winui-menuitem>
      Option 6
      <winui-menu>
        <winui-menuitem>
          Option 6.1
          <winui-menu>
            <winui-menuitem><button>Option 6.1.1</button></winui-menuitem>
            <winui-menuitem><button>Option 6.1.2</button></winui-menuitem>
            <hr />
            <winui-menuitem><button>Option 6.1.3</button></winui-menuitem>
            <winui-menuitem><button>Option 6.1.4</button></winui-menuitem>
          </winui-menu>
        </winui-menuitem>
        <winui-menuitem><button>Option 6.2</button></winui-menuitem>
        <winui-menuitem><button>Option 6.3</button></winui-menuitem>
      </winui-menu>
    </winui-menuitem>
  </winui-menu>
</template>

<style lang="stylus" scoped>
.winui-menu {
  width: 250px;
}
</style>