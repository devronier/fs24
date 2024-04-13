#!/bin/bash

# Nome do repositório remoto
remote_name="origin"

# Verifique se o arquivo branches.txt existe
if [ ! -f "branches.txt" ]; then
    echo "O arquivo branches.txt não foi encontrado."
    exit 1
fi

# Ler a lista de branches do arquivo branches.txt
branches=($(cat branches.txt))

# Iterar sobre cada branch na lista
for branch in "${branches[@]}"; do
    # Excluir o branch remoto
    git push $remote_name --delete $branch
    echo "Branch '$branch' excluído com sucesso."
done
