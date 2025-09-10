import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
  favoritos: Produto[]
}

const initialState: CarrinhoState = {
  itens: [],
  favoritos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const goods = action.payload

      if (state.itens.find((produto) => produto.id === goods.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(goods)
      }
    },
    adicionarFavorito: (state, action: PayloadAction<Produto>) => {
      if (!state.favoritos.find((p: Produto) => p.id === action.payload.id)) {
        state.favoritos.push(action.payload)
      }
    },
    removerFavorito: (state, action: PayloadAction<number>) => {
      state.favoritos = state.favoritos.filter(
        (p: Produto) => p.id !== action.payload
      )
    }
  }
})

export const { adicionar, adicionarFavorito, removerFavorito } =
  carrinhoSlice.actions
export default carrinhoSlice.reducer
