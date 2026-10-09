const $Language = Java.loadClass('com.langsystem.Language')
const $ModAttachments = Java.loadClass('com.langsystem.data.ModAttachments')
const $NetworkHandler = Java.loadClass('com.langsystem.network.NetworkHandler')
const raceLanguages = {
    human: 'human',
    elf: 'elven',
    dwarf: 'dwarven',
    beastkin: 'beastkin',
    draconic: 'draconic',
    feyborn: 'feyborn',
    hellborn: 'hellborn',
    abyss: 'abyss',
    primordial: 'primordial',
    ancient: 'ancient',
    vampire: 'vampiric'
}

function setRaceLanguage(player, languageId) {
    const language = $Language.byId(languageId).get()
    const data = player.getData($ModAttachments.LANGUAGE_DATA)
    data.allProgress().remove($Language.COMMON)
    data.setProgress(language, 100)
    data.forceCurrent(language)
    player.setData($ModAttachments.LANGUAGE_DATA, data)
    $NetworkHandler.sendSync(player)

Object.entries(raceLanguages).forEach(([race, languageId]) => {
    ServerEvents.basicCommand(`neoorigins_${race}_language`, event => {
        setRaceLanguage(event.player, languageId)
    })
})}
