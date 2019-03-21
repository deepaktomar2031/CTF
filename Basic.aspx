<%@ Page Title="Basic" Language="VB" MasterPageFile="~/MasterPage.master" AutoEventWireup="false" CodeFile="Basic.aspx.vb" Inherits="Basic" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

    <!-- Service Section -->
    <section id="services" class="padding50">
        <div class="container">
            <div class="row">
                <h2 class="background double animated wow fadeInUp" data-wow-delay="0.2s"><span><strong>B</strong>asic</span></h2>
            </div>
            <!-- ./ end row -->
            <div class="row">
                <table border="1" class="table">
                    <tr>
                        <li><a href="Passwordcrack.htm">Password Crack Challenge 1</a></li>
                        <li><a href="PasswordGuess.htm">Password Guess</a></li>
                        <li><a href="GettingLoginCredentials.htm">Getting Login Credentials</a></li>
                        <li><a href="Trytofindthepassword.htm">Try to find the password</a></li>
                        <br />
                        <asp:Button ID="Button1" runat="server" Text="Logout"></asp:Button>


                    </tr>

              
                 </table>
                
                
                
             
           
        
                <!-- ./ end service box -->
            </div>
            <!-- ./ end row -->
           
            <!-- ./ end row -->
        </div>
        <div class="clearfix">
        </div>
    </section>
    <!-- ./ End Service Section -->




</asp:Content>

