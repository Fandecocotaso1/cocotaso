// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010100010100000101010101010101000001000101000001030000000000000100010001010000010101010101000001000100010100000000000000000000010001000101000001010101010100000100010001010000010000000000000001000100010100000101010101010101010000000000000000000000000000000100000000000001010001000000010101010101010100010100020000010101030100000000000101000200000101010000010000000001010001000101010101000001000000010100010000010101010100000001010101000000000000000101000000000000010001010100000301010100000000000000000001010101`, img`
2 2 2 . 2 2 . . 2 2 2 2 2 2 2 2 
. . 2 . 2 2 . . 2 . . . . . . . 
2 . 2 . 2 2 . . 2 2 2 2 2 2 . . 
2 . 2 . 2 2 . . . . . . . . . . 
2 . 2 . 2 2 . . 2 2 2 2 2 2 . . 
2 . 2 . 2 2 . . 2 . . . . . . . 
2 . 2 . 2 2 . . 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . . 
2 . . . . . . 2 2 . 2 . . . 2 2 
2 2 2 2 2 2 . 2 2 . 2 . . 2 2 2 
. 2 . . . . . 2 2 . 2 . . 2 2 2 
. . 2 . . . . 2 2 . 2 . 2 2 2 2 
2 . . 2 . . . 2 2 . 2 . . 2 2 2 
2 2 . . . 2 2 2 2 . . . . . . . 
2 2 . . . . . . 2 . 2 2 2 . . . 
2 2 2 . . . . . . . . . 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.coral0,sprites.builtin.coral1,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
