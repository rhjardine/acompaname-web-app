import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';




{/* // <form name="quest" id="quest">
//                       <div class="row" style="padding-left:35px"> <!--1--> 
//             <div class="col-md-5 ">1. Se siente frecuentemente agotado</div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R1a" value="1"></div>
            
//         </div><br><div class="row" style="padding-left:35px"> <!--2-->
//             <div class="col-md-5">2. Se siente feliz la mayor parte del tiempo </div>           
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R2a" value="1"></div>       
            
//         </div><br><div class="row" style="padding-left:35px"> <!--3-->
//             <div class="col-md-5">3. Cambia de humor con facilidad   </div>           
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R3a" value="1"></div>       

//         </div><br><div class="row" style="padding-left:35px"> <!--4-->
//             <div class="col-md-5">4. Se enoja fácilmente  </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R4a" value="1"></div>       
//         </div><br><div class="row" style="padding-left:35px"> <!--5-->
//             <div class="col-md-5">5. Se deprime frecuentemente   </div>           
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R5a" value="1"></div>       

//         </div><br><div class="row" style="padding-left:35px"> <!--6-->
//             <div class="col-md-5">6. Se siente ansioso o muy estresado frecuentemente  </div>           
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R6a" value="1"></div>       

//         </div><br><div class="row" style="padding-left:35px"> <!--7-->
//             <div class="col-md-5">7. Siente que tiene que esforzarse mucho para trabajar   </div>           
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R7a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--8-->
//             <div class="col-md-5">8. Está pensando siempre en retirarse del trabajo  </div>           
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R8a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--9-->
//             <div class="col-md-5">9. Se mantiene en contacto con sus amigos   </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R9a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--10-->
//             <div class="col-md-5">10. Mantiene interés en el sexo   </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R10a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--11-->
//             <div class="col-md-5">11. Su vida sexual ha declinado   </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R11a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--12-->
//             <div class="col-md-5">12. Problema para mantenerse despierto en el día     </div>           
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R12a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--13-->
//             <div class="col-md-5">13. Se siente descansado al despertar  </div>           
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R13a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--14-->
//             <div class="col-md-5">14. Siente que se le olvidan las cosas   </div>           
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R14a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--15-->
//             <div class="col-md-5">15. Siente que es difícil pensar claramente  </div>           
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R15a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--16-->
//             <div class="col-md-5">16. Utiliza ayuda para su memoria (ejm: lista)  </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R16a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--17-->
//             <div class="col-md-5">17. Tiene problema de concentración  </div>           
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R17a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--18-->
//             <div class="col-md-5">18. Se siente fuera de forma física   </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R18a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--19-->
//             <div class="col-md-5">19. Tiene sobrepeso u obesidad  </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R19a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--20-->
//             <div class="col-md-5">20. Tiene dificultades para bajar de peso  </div>           
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R20a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--21-->
//             <div class="col-md-5">21. Ha engordado el abdomen (cauchos)  </div>           
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R21a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--22-->
//             <div class="col-md-5">22. Luce su musculatura joven   </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R22a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--23-->
//             <div class="col-md-5">23. Siente que su salud en general es buena </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R23a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--24-->
//             <div class="col-md-5">24. Se enferma o se resfría frecuentemente  </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R24a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--25-->
//             <div class="col-md-5">25. Siente dolores frecuentemente  </div>           
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R25a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--26-->
//             <div class="col-md-5">26. u colesterol está generalmente elevado </div>           
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R26a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--27-->
//             <div class="col-md-5">27. Toma pastillas para controlar el colesterol   </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R27a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--28-->
//             <div class="col-md-5">28. Hombres - ha perdido musculatura   </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R28a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--29-->
//             <div class="col-md-5">29. Mujeres - ha aumentado la grasa corporal.  </div>           
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R29a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--30-->
//             <div class="col-md-5">30. Su presión arterial es normal   </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R30a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--31-->
//             <div class="col-md-5">31. Se ha deteriorado su visión notablemente     </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R31a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--32-->
//             <div class="col-md-5">32. Tiene que orinar frecuentemente  </div>           
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R32a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> 
//             <div class="col-md-5">33. Tiene problemas digestivos    </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R33a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> 
//             <div class="col-md-5">34. La piel de su cara, cuello, brazos o abdomen es fláccida.   </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R34a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> 
//             <div class="col-md-5">35. Se ve o siente mas viejo (a) que sus contemporáneos    </div>
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R35a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> 
//             <div class="col-md-5">36. Tiene celulitis en sus muslos </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R36a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> 
//             <div class="col-md-5">37. Necesita cortarse el cabello menos frecuentemente   </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R37a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> 
//             <div class="col-md-5">38. Tardar sus heridas o magulladuras en sanar o cicatrizar   </div>           
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R38a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> 
//             <div class="col-md-5">39. Cada día se le hace mas difícil ejercitarse   </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R39a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> 
//             <div class="col-md-5">40. Tiene menos resistencia que antes   </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R40a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--41-->
//             <div class="col-md-5">41. Se le hace difícil respirar cuando hace ejercicios fuertes  </div>
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R41a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--42-->
//             <div class="col-md-5">42. Está en mejores condiciones que nunca    </div>           
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R42a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--43-->
//             <div class="col-md-5">43. Tiene entre 55 y 64 años    </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R43a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> 
//             <div class="col-md-5">44. Tiene entre 65 y 74 años  </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R44a" value="1"></div>

//         </div><br><div class="row" style="padding-left:35px"> <!--45-->
//             <div class="col-md-5">45. Tiene mas de 75 años  </div>            
//             <div class="col-xs-3 col-md-1">SI &nbsp;<input type="checkbox" name="R45a" value="1"></div>

//         </div><table cellspacing="0" cellpadding="5" width="99%" border="0">
//                         <tbody>
//                           <tr></tr>
