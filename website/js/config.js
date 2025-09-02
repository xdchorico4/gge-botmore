addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("config-form").addEventListener('submit', saveConfig);
  document.getElementById("load-config").addEventListener('click', loadConfig);
  
  // Cargar configuración actual al inicio
  loadConfig();
})

async function saveConfig(event) {
  event.preventDefault();
  
  var configFormElement = document.getElementById("config-form");
  var configInfoBannerElement = configFormElement.querySelector("#config-info-banner");
  
  // Recopilar datos del formulario
  var configData = {
    gameURL: configFormElement.querySelector("#gameURL").value,
    gameServer: configFormElement.querySelector("#gameServer").value,
    discordToken: configFormElement.querySelector("#discordToken").value,
    discordClientId: configFormElement.querySelector("#discordClientId").value,
    internalWorkerName: configFormElement.querySelector("#internalWorkerName").value,
    internalWorkerPass: configFormElement.querySelector("#internalWorkerPass").value,
    defaultAllianceName: configFormElement.querySelector("#defaultAllianceName").value,
    signupToken: configFormElement.querySelector("#signupToken").value,
    noInternalWorker: configFormElement.querySelector("#noInternalWorker").checked
  };

  configInfoBannerElement.innerHTML = "Guardando configuración...";
  configInfoBannerElement.style.color = "#FFA500";

  try {
    var response = await fetch(`${location.protocol}//${window.location.hostname}:${location.port}/api/config`, {
      method: "POST",
      body: JSON.stringify(configData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });

    var result = await response.json();
    
    if (result.success) {
      configInfoBannerElement.innerHTML = "✅ Configuración guardada exitosamente. El servidor se reiniciará automáticamente.";
      configInfoBannerElement.style.color = "#4CAF50";
      
      // Esperar un momento y recargar la página para mostrar la nueva configuración
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      configInfoBannerElement.innerHTML = "❌ Error al guardar: " + (result.error || "Error desconocido");
      configInfoBannerElement.style.color = "#f44336";
    }
  } catch (error) {
    configInfoBannerElement.innerHTML = "❌ Error de conexión: " + error.message;
    configInfoBannerElement.style.color = "#f44336";
  }
}

async function loadConfig() {
  var configInfoBannerElement = document.getElementById("config-info-banner");
  
  try {
    configInfoBannerElement.innerHTML = "Cargando configuración actual...";
    configInfoBannerElement.style.color = "#FFA500";
    
    var response = await fetch(`${location.protocol}//${window.location.hostname}:${location.port}/api/config`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });

    var config = await response.json();
    
    if (config.success) {
      // Llenar los campos del formulario con la configuración actual
      document.getElementById("gameURL").value = config.data.gameURL || "";
      document.getElementById("gameServer").value = config.data.gameServer || "";
      document.getElementById("discordToken").value = config.data.discordToken || "";
      document.getElementById("discordClientId").value = config.data.discordClientId || "";
      document.getElementById("internalWorkerName").value = config.data.internalWorkerName || "";
      document.getElementById("internalWorkerPass").value = config.data.internalWorkerPass || "";
      document.getElementById("defaultAllianceName").value = config.data.defaultAllianceName || "";
      document.getElementById("signupToken").value = config.data.signupToken || "";
      document.getElementById("noInternalWorker").checked = config.data.noInternalWorker || false;
      
      configInfoBannerElement.innerHTML = "✅ Configuración cargada";
      configInfoBannerElement.style.color = "#4CAF50";
      
      // Limpiar mensaje después de un tiempo
      setTimeout(() => {
        configInfoBannerElement.innerHTML = "";
      }, 2000);
    } else {
      configInfoBannerElement.innerHTML = "⚠️ No se pudo cargar la configuración actual";
      configInfoBannerElement.style.color = "#FFA500";
    }
  } catch (error) {
    configInfoBannerElement.innerHTML = "❌ Error al cargar configuración: " + error.message;
    configInfoBannerElement.style.color = "#f44336";
  }
}