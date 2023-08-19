<template>
  <winui-menubar class="can-hover">
    <winui-menuitem>
      File
      <winui-menu>
        <winui-menuitem>
          <img
            src="https://img.icons8.com/color/18/opened-folder.png"
            alt="open"
          />
          <button>
            Open...
            <span>Ctrl+O</span>
          </button>
        </winui-menuitem>
        <winui-menuitem><button>Open Recent</button></winui-menuitem>
        <hr />
        <winui-menuitem>
          <img src="https://img.icons8.com/color/18/save.png" alt="save" />
          <button>
            Save
            <span>Ctrl+S</span>
          </button>
        </winui-menuitem>
        <winui-menuitem>
          <img
            src="https://img.icons8.com/color/18/save-as.png"
            alt="save as"
          />
          <button>
            Save As...
            <span>Ctrl+Shift+S</span>
          </button>
        </winui-menuitem>
        <hr />
        <winui-menuitem><button>Exit</button></winui-menuitem>
      </winui-menu>
    </winui-menuitem>
    <winui-menuitem>Edit</winui-menuitem>
    <winui-menuitem>View</winui-menuitem>
    <winui-menuitem>Run</winui-menuitem>
    <winui-menuitem>Help</winui-menuitem>
  </winui-menubar>
</template>
