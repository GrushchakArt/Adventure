function TextBlock(id, text) {
    this.id = id;
    this.text = text
}

function Action(id, text, from_block_id, to_block_id) {
    this.id = id;
    this.text = text;
    this.from_block_id = from_block_id;
    this.to_block_id = to_block_id
}

const blockCollection = {
    blocks: [],
    getBlockById: function (id) {
        console.log(this.blocks);
        for (var i in this.blocks) {
            if (this.blocks[i].id === id) {
                return this.blocks[i]
            }
        }
    }
};
const actionCollection = {
    actions: [],
    getActionsById: function (block_id) {
        var actVariants = [];
        for (let i=0; i<=this.actions.length; i++) {
            if (this.actions[i].from_block_id === block_id) {
                actVariants.push(this.actions[i]);
            }
        }
        return actVariants;
    }
};

document.getElementById("first").addEventListener("click", MyFunction);
function MyFunction(){
    document.getElementById("first-1").innerHTML="Подкравшись к твари сзади, вы одним ударом отрубаете ей голову. Никто не пострадал!";
    document.getElementById().
}