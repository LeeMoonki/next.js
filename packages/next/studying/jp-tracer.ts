interface JPTracerLog {
  logKey: string
  logContent: any
}

export class JPTracer {
  private _log: JPTracerLog[] = []
  private _tracingName: string = ''

  constructor(tracingName: string) {
    this._tracingName = tracingName
  }

  public record(logKey: string, logContent: any) {
    const log: JPTracerLog = {
      logKey,
      logContent,
    }

    this._appendLog(log)
  }

  public showLogs() {
    console.log('\x1b[35m%s\x1b[0m', this._tracingName)

    this._log.forEach((log) => {
      console.log('\x1b[35m%s\x1b[0m', log.logKey, ` - ${log.logContent}`)
    })
  }

  private _appendLog(log: JPTracerLog) {
    this._log.push(log)
  }
}
