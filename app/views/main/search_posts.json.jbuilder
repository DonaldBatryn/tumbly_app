json.items do
    json.array!(@items) do |item|
        json.title item.title
        json.body item.body
    end
end