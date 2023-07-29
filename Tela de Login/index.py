import customtkinter

def button_callback():
    print("Logando...")

customtkinter.set_appearance_mode('dark')
customtkinter.set_default_color_theme('dark-blue')

tela_de_login = customtkinter.CTk()
tela_de_login.title('Tela de Login')
tela_de_login.iconbitmap('icon.ico')
tela_de_login.geometry('300x280')

# Frame para centralizar e expandir o conteúdo verticalmente
frame_central = customtkinter.CTkFrame(tela_de_login)
frame_central.pack(expand=True, fill='both', padx=20, pady=20)

login = customtkinter.CTkLabel(frame_central, text='Fazer login')
login.pack(side='top', pady=10)

email = customtkinter.CTkEntry(frame_central, placeholder_text='Seu e-mail')
email.pack(side='top', pady=10)

senha_numero = customtkinter.CTkEntry(frame_central, placeholder_text='Sua senha', show='*')
senha_numero.pack(side='top', pady=10)

checkbox = customtkinter.CTkCheckBox(frame_central, text='Lembrar login')
checkbox.pack(side='top', pady=10)

botao = customtkinter.CTkButton(frame_central, text='Login', command=button_callback)
botao.pack(side='top', pady=10)

# Espaço em branco para centralizar verticalmente o conteúdo
espaco_inferior = customtkinter.CTkLabel(frame_central, text='')
espaco_inferior.pack(side='top', pady=20)

tela_de_login.mainloop()
