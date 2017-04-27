@echo on
@rem 这种启动方式可以保证ctrl+c后不退出窗口
@start cmd /k "cd App && npm run dev"