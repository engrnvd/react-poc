const PLAYBACK_TIME_KEY = '_playbackTimes'

function getData() {
    let data = localStorage.getItem(PLAYBACK_TIME_KEY)
    if (data) {
        try {
            return JSON.parse(data)
        } catch (e) {
            return {}
        }
    }
    return {}
}

export const PlaybackTimeHelper = {
    SAVE_INTERVAL: 3,
    save(id, time) {
        let data = getData()
        data[id] = time
        localStorage.setItem(PLAYBACK_TIME_KEY, JSON.stringify(data))
    },
    get(id) {
        let data = getData()
        return data[id] || 0
    }
}
