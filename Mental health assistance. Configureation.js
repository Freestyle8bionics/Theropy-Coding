import Home from "@/pages/Home.vue";
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    ("version");
    "0.2.0", "configurations";
    [
      {
        name: ".NET Core Launch (console)",
        type: "coreclr",
        request: "launch",
        preLaunchTask: "build",
        program:
          "${workspaceFolder}/bin/Debug/<target-framework>/<project-name.dll>",
        args: [],
        cwd: "${workspaceFolder}",
        stopAtEntry: false,
        console: "internalConsole",
        pipeTransport: {
          pipeCwd: "${workspaceFolder}",
          pipeProgram:
            "enter the fully qualified path for the pipe program name, for example '/usr/bin/ssh'",
          pipeArgs: [],
          debuggerPath:
            "enter the path for the debugger on the target machine, for example ~/vsdbg/vsdbg",
        },
      },
      {
        name: ".NET Core Launch (web)",
        type: "coreclr",
        request: "launch",
        preLaunchTask: "build",
        program:
          "${workspaceFolder}/bin/Debug/<target-framework>/<project-name.dll>",
        args: [],
        cwd: "${workspaceFolder}",
        stopAtEntry: false,
        serverReadyAction: {
          action: "openExternally",
          pattern: "\\bNow listening on:\\s+(https?://\\S+)",
        },
        env: {
          ASPNETCORE_ENVIRONMENT: "Development",
        },
        sourceFileMap: {
          "/Views": "${workspaceFolder}/Views",
        },
      },
      {
        name: ".NET Core Launch (console)",
        type: "coreclr",
        request: "launch",
        preLaunchTask: "build",
        program:
          "${workspaceFolder}/bin/Debug/<target-framework>/<project-name.dll>",
        args: [],
        cwd: "${workspaceFolder}",
        stopAtEntry: false,
        console: "internalConsole",
      },
      {
        name: "Attach to Chrome",
        port: 9222,
        request: "attach",
        type: "chrome",
        webRoot: "${workspaceFolder}",
      },
      {
        type: "chrome",
        request: "launch",
        name: "Launch Chrome against localhost",
        url: "http://localhost:8080",
        webRoot: "${workspaceFolder}",
      },
    ];
  }
  