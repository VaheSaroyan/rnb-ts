#!/usr/bin/env node
const { green, blue } = require('kleur')
const fs = require('fs')
const art = require('ascii-art')

console.log(blue("VS React-Native Boilerplate initialized with success !  🚀\n"));


console.log(green(`
                                                                                                 .=#@@#
                                                                                                :#@@@@@@*
                                                                                              .#@@@@%***#
                                                                                             +@@@#=.
                                                                                           :%@@*.
                                                                                          +@@+.       :+*#*+-
                                                    ..                                  .%@#.       :%@@@@@@@@=
                                                  #@@@@%#+-    ..                      -@@-        .ATOMSPACE@@+
                                                  @@@@@@@@%  *@@@@*                   *@+          +ATOMSPACE@@%
                                                  -@=::::-: +@@@@@@*                .%%:           -ATOMSPACE@@*
                                                            :@@@@@@- .             :@*              +ATOMSPACE#
                                                             .=**+. .@%+.     .-+*%@@@@@@@%#+-.      .+%@@@%*-
                                                                      :+%%=-*ATOMSPACEATOMSPACE@*-
                                                                        .*ATOMSPACEATOMSPACE@@@@@@@+.
                                                                       +ATOMSPACEATOMSPACEATOMSPACE@@*
                                                                     :ATOMSPACEATOMSPACEATOMSPACE@@@@@@-
                                                                    =ATOMSPACEATOMSPACEATOMSPACE@@@@@@@@=                  :=-.
                                                                   =ATOMSPACEATOMSPACEATOMSPACEATOMSPACE@=                   #@@+
                                                                  .ATOMSPACEATOMSPACEATOMSPACEATOMSPACE@@@:                 .%@@*
                                                                  #ATOMSPACEATOMSPACEATOMSPACEATOMSPACE@@@#               .+@@*:
                                                        :::..     ATOMSPACEATOMSPACEATOMSPACEATOMSPACE@@@@@.           .=*#=:
                                                  :=++=:         :ATOMSPACEATOMSPACEATOMSPACEATOMSPACE@@@@@-        :-==.
                                             .=*%#=:             :ATOMSPACEATOMSPACEATOMSPACEATOMSPACE@@@@@-     ...
                                          -*@@%=                 .ATOMSPACEATOMSPACEATOMSPACEATOMSPACE@@@@@.
                                       .*@@@@-                    %ATOMSPACEATOMSPACEATOMSPACEATOMSPACE@@@%
                                       %@@@@=                     -ATOMSPACEATOMSPACEATOMSPACEATOMSPACE@@@-
                                       .+#%@%-.                    *ATOMSPACEATOMSPACEATOMSPACEATOMSPACE@*
                                             .:.                   =#ATOMSPACEATOMSPACEATOMSPACE@@@@@@@@#
                                                                  :+ +ATOMSPACEATOMSPACEATOMSPACE@@@@@@+
                                                                  #   :%ATOMSPACEATOMSPACE@@@@@%#%@@@%:
                                                                 *:     =%ATOMSPACE@@@@@@@@%=.  .  .-
                                                                -*        :*ATOMSPACE@@@@@* .*@@@@%+.
                                                                @.           :=*%@@@@@@@@# .ATOMSPACE.
                                                               *#                 .::---:. =ATOMSPACE-
                                                              ::.                          .ATOMSPACE. #%*=:         :
                                                            +@@@@*                          .*@@@@@+.   .=#@@@#*+++*@%
                                                           .@@@@@@-          ..                 .           :=*%@@@@@%
                                                            +@@@@*         .+.                                   .::.
                                                            .:::.        .**
                                                            *@@@*     .=#@=
                                                            @@@@@%***%@@#.
                                                           .ATOMSPACE@@-
                                                           .ATOMSPACE+
                                                            @@@@@@@+.
                                                            -%@@#=
`))

console.log(blue(`

                                       █████╗ ████████╗ ██████╗ ███╗   ███╗    ███████╗██████╗  █████╗  ██████╗███████╗
                                      ██╔══██╗╚══██╔══╝██╔═══██╗████╗ ████║    ██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝
                                      ███████║   ██║   ██║   ██║██╔████╔██║    ███████╗██████╔╝███████║██║     █████╗
                                      ██╔══██║   ██║   ██║   ██║██║╚██╔╝██║    ╚════██║██╔═══╝ ██╔══██║██║     ██╔══╝
                                      ██║  ██║   ██║   ╚██████╔╝██║ ╚═╝ ██║    ███████║██║     ██║  ██║╚██████╗███████╗
                                      ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝    ╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝╚══════╝

`))
//
// console.log(
//     '- 📚 If you need to read more about this boilerplate : https://vahesaroyan.github.io/react-native-boilerplate-ts',
// )
// console.log(
//     '- 🤕 If you have some troubles : https://github.com/VaheSaroyan/react-native-boilerplate-ts/issues',
// )
// console.log(
//     '- ⭐ If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives :) https://github.com/VaheSaroyan/react-native-boilerplate-ts',
// )
