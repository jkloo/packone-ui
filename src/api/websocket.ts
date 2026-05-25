import { useAppStore } from "../store/store";
import { APIResponse } from "./models";


class PackService {
  ws: WebSocket

  constructor() {
    this.ws = new WebSocket('ws://localhost:3000/ws');
    this.ws.onopen = () => {
      console.log("open")
    }
    this.ws.onclose = () => {
      console.log("close")
    }

    this.ws.onmessage = async (msg) => {
      const data = JSON.parse(msg.data) as APIResponse

      await useAppStore.getState().update(data)
    }

    console.log(`Websocket listening on ${this.ws.url}`)
  }

  static async create(): Promise<PackService> {
    return new PackService()
  }
}

export const service = PackService.create()
